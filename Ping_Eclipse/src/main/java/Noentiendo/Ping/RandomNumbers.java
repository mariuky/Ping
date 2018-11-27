package Noentiendo.Ping;


public class RandomNumbers {
	private int idPWUP;
	private int posPWUPx, posPWUPy;
	private int velInicialX, velInicialY;
	RandomNumbers() {
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
