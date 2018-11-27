package Noentiendo.Ping;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class GameController {
	Map<Long, Player> players = new ConcurrentHashMap<>();
	Map<Long, Ball> balls = new ConcurrentHashMap<>(); 
	Map<Long, Estado> estados = new ConcurrentHashMap<>(); 
	AtomicLong nextId = new AtomicLong(0);
	AtomicLong nextIdBall = new AtomicLong(0);
	AtomicLong nextIdEstado = new AtomicLong(0);

	@GetMapping(value = "/game")
	public int numberPlayers() {
		return players.size();
	}
	
	@PostMapping(value = "/game")
	@ResponseStatus(HttpStatus.CREATED)
	public long newPlayer(@RequestBody Player player) {
		long id = nextId.incrementAndGet();
		player.setId(id);
		players.put(player.getId(), player);
		
		return player.getId();
	}
	
	@GetMapping(value = "/game/{id}")
	public ResponseEntity<Player> getPlayer(@PathVariable long id) {
		
		Player savedPlayer = players.get(id);
		
		if (savedPlayer != null) {
			return new ResponseEntity<>(savedPlayer, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping(value = "/game/{id}")
	public ResponseEntity<Player> updatePlayer(@PathVariable long id, @RequestBody Player playerUpdated) {
		
		Player savedPlayer = players.get(playerUpdated.getId());
		
		if (savedPlayer != null) {
			players.put(id, playerUpdated);
			return new ResponseEntity<>(playerUpdated, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping(value = "/game/{id}")
	public ResponseEntity<Player> borraJugador(@PathVariable long id) {
		
		Player savedPlayer = players.get(id);
		
		if (savedPlayer != null) {
			players.remove(savedPlayer.getId());
			return new ResponseEntity<>(savedPlayer, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping(value = "/balls")
	public int numberBalls() {
		return balls.size();
	}
	
	@PostMapping(value = "/balls")
	@ResponseStatus(HttpStatus.CREATED)
	public long nuevoBall(@RequestBody Ball ball) {
		long id = nextIdBall.incrementAndGet();
		ball.setId(id);
		balls.put(ball.getId(), ball);

		return ball.getId();
	}
	
	@GetMapping(value = "/balls/{id}")
	public ResponseEntity<Ball> getBall(@PathVariable long id) {

		Ball savedball = balls.get(id);

		if (savedball != null) {
			return new ResponseEntity<>(savedball, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping(value = "/balls/{id}")
	public ResponseEntity<Ball> actualizaBall(@PathVariable long id, @RequestBody Ball ballUpdated) {

		Ball savedball = balls.get(ballUpdated.getId());

		if (savedball != null) {
			balls.put(id, ballUpdated);
			return new ResponseEntity<>(ballUpdated, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping(value = "/balls/{id}")
	public ResponseEntity<Ball> borraBall(@PathVariable long id) {

		Ball savedball = balls.get(id);

		if (savedball != null) {
			balls.remove(savedball.getId());
			return new ResponseEntity<>(savedball, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping(value = "/estado")
	@ResponseStatus(HttpStatus.CREATED)
	public long newEstado(@RequestBody Estado estado) {
		long id = nextIdEstado.incrementAndGet();
		estado.setId(id);
		estados.put(estado.getId(), estado);
		
		return estado.getId();
	}
	
	@GetMapping(value = "/estado/{id}")
	public ResponseEntity<Estado> getEstado(@PathVariable long id) {
		
		Estado savedEstado = estados.get(id);
		
		if (savedEstado != null) {
			return new ResponseEntity<>(savedEstado, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping(value = "/estado/{id}")
	public ResponseEntity<Estado> updateEstados(@PathVariable long id, @RequestBody Estado estadoUpdated) {
		
		Estado savedEstado = estados.get(estadoUpdated.getId());
		
		if (savedEstado != null) {
			estados.put(id, savedEstado);
			return new ResponseEntity<>(savedEstado, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping(value = "/estado/{id}")
	public ResponseEntity<Estado> borraEstado(@PathVariable long id) {
		
		Estado savedEstados = estados.get(id);
		
		if (savedEstados != null) {
			estados.remove(savedEstados.getId());
			return new ResponseEntity<>(savedEstados, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}