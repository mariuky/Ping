package Noentiendo.Ping;

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
@RequestMapping("/random")
public class randomController {
	RandomNumbers randomN;
	
	Random rnd = new Random();
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public RandomNumbers nuevoRand() {
		int posX = 200+rnd.nextInt(401);
		int posY = 100+rnd.nextInt(401);
		int velInicialY = -150+rnd.nextInt(301);
		int aux2=350;
		int aux = rnd.nextInt(2);
		if(aux==0)
			aux2=-350;
		int velInicialX=aux2;
		int Id = rnd.nextInt(6);
		
		randomN = new RandomNumbers();
		
		randomN.setIdPWUP(Id);
		randomN.setPosPWUPx(posX);
		randomN.setPosPWUPy(posY);
		randomN.setVelInicialX(velInicialX);
		randomN.setVelInicialY(velInicialY);

		return randomN;
	}
	
	@GetMapping
	public ResponseEntity<RandomNumbers> getRand() {

		RandomNumbers savedRand = randomN;

		if (savedRand != null) {
			return new ResponseEntity<>(savedRand, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping
	public ResponseEntity<RandomNumbers> actualizaRand() {

		RandomNumbers savedRand = randomN;

		if (savedRand != null) {
			int posX = 200+rnd.nextInt(401);
			int posY = 100+rnd.nextInt(401);
			int velInicialY = -150+rnd.nextInt(301);
			int aux2=350;
			int aux = rnd.nextInt(2);
			if(aux==0)
				aux2=-350;
			int velInicialX=aux2;
			int Id = rnd.nextInt(6);
			
			randomN = new RandomNumbers();
			
			randomN.setIdPWUP(Id);
			randomN.setPosPWUPx(posX);
			randomN.setPosPWUPy(posY);
			randomN.setVelInicialX(velInicialX);
			randomN.setVelInicialY(velInicialY);

			return new ResponseEntity<>(randomN, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping
	public ResponseEntity<RandomNumbers> borraCat() {

		RandomNumbers savedRand = randomN;

		if (savedRand != null) {
			randomN = null;

			return new ResponseEntity<>(savedRand, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
