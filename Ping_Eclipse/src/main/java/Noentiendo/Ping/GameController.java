package Noentiendo.Ping;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

public class GameController {
	//Controlador de los jugadores (posicion e id) y la bola (posicion e id porque podemos crear varias)
	Map<Long, Player> players = new ConcurrentHashMap<>();
	Map<Long, Ball> balls = new ConcurrentHashMap<>(); 
	Map<Long, Estado> estados = new ConcurrentHashMap<>(); 
	AtomicLong nextId = new AtomicLong(0);
	AtomicLong nextIdBall = new AtomicLong(0);
	AtomicLong nextIdEstado = new AtomicLong(0);
	
	public int numberPlayers() {
		return players.size();
	}
	
	public Player newPlayer() {
		Player player = new Player();
		long id = nextId.incrementAndGet();
		player.setId(id);
		player.setY(300);
		player.setColor(0);
		players.put(player.getId(), player);
		return player;
	}
	
	public Player getPlayer(long id) {
		Player savedPlayer = players.get(id);
			return savedPlayer;
	}
	
	public void updatePlayer(long id, int y){
		Player savedPlayer = players.get(id);
		savedPlayer.setY(y);
		if (savedPlayer != null) 
			players.put(id, savedPlayer);
	}
	public void deletePlayer(long id) {
		Player savedPlayer = players.get(id);
		if (savedPlayer != null) {
			players.remove(savedPlayer.getId());
		}
	}
	
	public int numberBalls() {
		return balls.size();
	}
	public Ball newBall() {
		Ball ball = new Ball();
		long id = nextIdBall.incrementAndGet();
		ball.setId(id);
		ball.setPosBallx(400);
		ball.setPosBally(300);
		ball.setVelBallx(0);
		ball.setVelBally(0);
		balls.put(ball.getId(), ball);
		return ball;
	}
	public Ball getBall(long id) {
		Ball savedBall = balls.get(id);
			return savedBall;
		
	}
	
	
	public void updateBall(long id, int posBallx, int posBally, 
			int velBallx, int velBally) {

		Ball savedball = balls.get(id);
		savedball.setPosBallx(posBallx);
		savedball.setPosBally(posBally);
		savedball.setVelBallx(velBallx);
		savedball.setVelBally(velBally);

		if (savedball != null)
			balls.put(id, savedball);
	}
	
	public void deleteBall(long id) {
		Ball savedBall = balls.get(id);
		if (savedBall != null) {
			balls.remove(savedBall.getId());
		}
	}
	
	public Estado newEstado() {
		Estado estado = new Estado();
		long id = nextIdEstado.incrementAndGet();
		estado.setId(id);
		estado.setLastTouch(50);
		estado.setResetOnline(300);
		estado.setPunt1(0);
		estado.setPunt2(0);
		estado.setPowerId(-1);
		estado.setPowerX(0);
		estado.setPowerY(0);
		estado.setSpawn(0);
		estados.put(estado.getId(), estado);
		return estado;
	}
	public Estado getEstado(long id) {
		Estado savedEstado = estados.get(id);
				return savedEstado;
	}
	
	public void updateEstado(long id, int lastTouch, int resetOnline,
			int punt1, int punt2, 
			int powerId, int powerY, 
			int powerX, int spawn) {
		Estado savedEstado = estados.get(id);
		savedEstado.setLastTouch(lastTouch);
		savedEstado.setResetOnline(resetOnline);
		savedEstado.setPunt1(punt1);
		savedEstado.setPunt2(punt2);
		savedEstado.setPowerId(powerId);
		savedEstado.setPowerY(powerY);
		savedEstado.setPowerX(powerX);
		savedEstado.setSpawn(spawn);
		
		if (savedEstado != null)
			estados.put(id, savedEstado);
	}
	
	public void deleteEstado(long id) {
		Estado savedEstado = estados.get(id);
		if (savedEstado != null) {
			estados.remove(savedEstado.getId());
		}
	}
}