package Noentiendo.Ping;

import java.util.Random;

public class RandomNumbers {
	private int idPWUP;
	private int posPWUPx, posPWUPy;
	private int velInicialX, velInicialY;
	Random rnd = new Random();
	RandomNumbers() {
		this.posPWUPx = 200+rnd.nextInt(401);
		this.posPWUPy = 100+rnd.nextInt(401);
		this.velInicialY = -150+rnd.nextInt(301);
		int aux2=350;
		int aux = rnd.nextInt(2);
		if(aux==0)
			aux2=-350;
		this.velInicialX=aux2;
		this.idPWUP=rnd.nextInt(6);
	}
	public int getIdPWUP() {
		return idPWUP;
	}
	public void setIdPWUP(int idPWUP) {
		this.idPWUP = idPWUP;
	}
	public int getPosPWUPx() {
		return posPWUPx;
	}
	public void setPosPWUPx(int posPWUPx) {
		this.posPWUPx = posPWUPx;
	}
	public int getPosPWUPy() {
		return posPWUPy;
	}
	public void setPosPWUPy(int posPWUPy) {
		this.posPWUPy = posPWUPy;
	}
	public int getVelInicialX() {
		return velInicialX;
	}
	public void setVelInicialX(int velInicialX) {
		this.velInicialX = velInicialX;
	}
	public int getVelInicialY() {
		return velInicialY;
	}
	public void setVelInicialY(int velInicialY) {
		this.velInicialY = velInicialY;
	}
	@Override
	public String toString() {
		return "Random [idPWUP=" + idPWUP + ", posPWUPx=" + posPWUPx + ", posPWUPy=" + posPWUPy + ", velInicialX="
				+ velInicialX + ", velInicialY=" + velInicialY + "]";
	}
	
}
