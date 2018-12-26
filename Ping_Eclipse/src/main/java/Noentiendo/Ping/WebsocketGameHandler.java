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
/*
					ObjectNode jsonPlayer = mapper.createObjectNode();
					jsonPlayer.put("id", player.getId());
					jsonPlayer.put("y", player.getY());
					jsonPlayer.put("color", player.getColor());*/
					
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
				break;
			case "GET_PLAYER":
				Player savedPlayer = gameController.getPlayer(nodeGet.get("id").asLong());
				jsonSend.put("type", "GIVE_PLAYER");
				jsonSend.putPOJO("player", savedPlayer);
				break;
			case "CREATE_ESTADO":
				Estado estado = gameController.newEstado();
				
				/*ObjectNode jsonEstado = mapper.createObjectNode();
				jsonEstado.put("id", estado.getId());
				jsonEstado.put("lastTouch", estado.getLastTouch());
				jsonEstado.put("resetOnline", estado.getResetOnline());
				jsonEstado.put("punt1", estado.getPunt1());
				jsonEstado.put("punt2", estado.getPunt2());
				jsonEstado.put("powerId", estado.getPowerId());
				jsonEstado.put("powerY", estado.getPowerY());
				jsonEstado.put("powerX", estado.getPowerX());
				jsonEstado.put("spawn", estado.getSpawn());*/
				
				jsonSend.put("type", "ESTADO_CREATED");
				jsonSend.putPOJO("estado", estado);
				
				break;
			case "CREATE_BALL":
				Ball ball = gameController.newBall();
				/*ObjectNode jsonBall = mapper.createObjectNode();

				jsonBall.put("id", ball.getId());
				jsonBall.put("posBallx", ball.getPosBallx());
				jsonBall.put("posBally", ball.getPosBally());
				jsonBall.put("velBallx", ball.getVelBallx());
				jsonBall.put("velBally", ball.getVelBally());*/
				
				jsonSend.put("type", "BALL_CREATED");
				jsonSend.putPOJO("ball", ball);
				
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
