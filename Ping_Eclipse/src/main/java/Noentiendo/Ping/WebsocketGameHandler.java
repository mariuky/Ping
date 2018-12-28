package Noentiendo.Ping;

//import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebsocketGameHandler extends TextWebSocketHandler {

	private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
	private ObjectMapper mapper = new ObjectMapper();
	GameController gameController = new GameController();

	// Invoked after WebSocket negotiation has succeeded and the WebSocket
	// connection is opened and ready for use.
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("New user: " + session.getId());
		sessions.put(session.getId(), session);
	}

	// Invoked after the WebSocket connection has been closed by either side, or
	// after a transport error has occurred. Although the session may technically
	// still be open, depending on the underlying implementation, sending messages
	// at this point is discouraged and most likely will not succeed.
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		System.out.println("Session closed: " + session.getId());
		sessions.remove(session.getId());
	}


	// Invoked when a new WebSocket message arrives.
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

			JsonNode nodeGet = mapper.readTree(message.getPayload());
			ObjectNode jsonSend = mapper.createObjectNode();
			
			switch (nodeGet.get("type").asText()) {
			case "CREATE_PLAYER":
				
					Player player = gameController.newPlayer();
					if (gameController.numberPlayers() == 2) {
						jsonSend.put("type", "JUGAR");
					}else {
						jsonSend.put("type", "PLAYER_CREATED");
					}
					
					jsonSend.putPOJO("player", player);
					System.out.println("Jugador creado: " + session.getId());
				break;
			
			case "UPDATE_PLAYER":
				gameController.updatePlayer(nodeGet.get("id").asLong(), nodeGet.get("y").asInt());
				jsonSend.put("type", "UPDATED_PLAYER");
				break;
			
			case "GET_PLAYER":
				Player savedPlayer = gameController.getPlayer(nodeGet.get("id").asLong());
				
				jsonSend.put("type", "GIVE_PLAYER");
				jsonSend.putPOJO("player", savedPlayer);
				break;
			
			case "CREATE_ESTADO":
				Estado estado = gameController.newEstado();
				jsonSend.put("type", "CREATED_ESTADO");
				break;
			
			case "UPDATE_ESTADO":
				System.out.println("Estado updateado");
				System.out.println("Estado updateado: "+ nodeGet.get("punt2").asInt());
				System.out.println("Estado updateado: "+ nodeGet.get("punt1").asInt());
				gameController.updateEstado(nodeGet.get("id").asLong(), 
						nodeGet.get("lastTouch").asInt(), nodeGet.get("resetOnline").asInt(), 
						nodeGet.get("punt1").asInt(), nodeGet.get("punt2").asInt(), 
						nodeGet.get("powerId").asInt(), nodeGet.get("powerY").asInt(), 
						nodeGet.get("powerX").asInt(), nodeGet.get("spawn").asInt());
				System.out.println("Ha llamado a la funcion");
				jsonSend.put("type", "UPDATED_ESTADO");
				break;
			
			case "GET_ESTADO":
				Estado savedEstado = gameController.getEstado(nodeGet.get("id").asLong());
				
				jsonSend.put("type", "GIVE_ESTADO");
				jsonSend.putPOJO("estado", savedEstado);
				break;
			
				
			case "CREATE_BALL":
				Ball ball = gameController.newBall();
				jsonSend.put("type", "CREATED_BALL");
				
				break;
				
			case "UPDATE_BALL":
				gameController.updateBall(nodeGet.get("id").asLong(), 
						nodeGet.get("posBallx").asInt(), nodeGet.get("posBally").asInt(), 
						nodeGet.get("velBallx").asInt(), nodeGet.get("velBally").asInt());
				jsonSend.put("type", "UPDATED_BALL");
				break;
			
			case "GET_BALL":
				Ball savedBall = gameController.getBall(nodeGet.get("id").asLong());
				
				jsonSend.put("type", "GIVE_BALL");
				jsonSend.putPOJO("ball", savedBall);
				break;
			default:
				break;
			}
			for(WebSocketSession participant : sessions.values()) {
			
					participant.sendMessage(new TextMessage(jsonSend.toString()));
					System.out.println("Mensaje enviado a: " + session.getId());
				
			}
	}
}
