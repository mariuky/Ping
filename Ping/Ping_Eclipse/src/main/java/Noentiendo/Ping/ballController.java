/*package Noentiendo.Ping;

import java.util.Map;
import java.util.Random;
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
@RequestMapping("/balls")
public class ballController {
	Map<Long, Ball> balls = new ConcurrentHashMap<>(); 
	AtomicLong nextId = new AtomicLong(0);
	
	@GetMapping
	public int numberBalls() {
		return balls.size();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public long nuevoBall(@RequestBody Ball ball) {
		long id = nextId.incrementAndGet();
		ball.setId(id);
		balls.put(ball.getId(), ball);

		return ball.getId();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Ball> getBall(@PathVariable long id) {

		Ball savedball = balls.get(id);

		if (savedball != null) {
			return new ResponseEntity<>(savedball, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Ball> actualizaBall(@PathVariable long id, @RequestBody Ball ballUpdated) {

		Ball savedball = balls.get(ballUpdated.getId());

		if (savedball != null) {
			balls.put(id, ballUpdated);
			return new ResponseEntity<>(ballUpdated, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Ball> borraBall(@PathVariable long id) {

		Ball savedball = balls.get(id);

		if (savedball != null) {
			balls.remove(savedball.getId());
			return new ResponseEntity<>(savedball, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}*/
