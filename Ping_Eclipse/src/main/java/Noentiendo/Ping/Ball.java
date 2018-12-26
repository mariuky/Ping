package Noentiendo.Ping;


public class Ball {
	private long id;
	

	private int posBallx, posBally;
	private int velBallx, velBally;

	Ball() {
	}
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	public int getPosBallx() {
		return posBallx;
	}

	public void setPosBallx(int posBallx) {
		this.posBallx = posBallx;
	}

	public int getPosBally() {
		return posBally;
	}

	public void setPosBally(int posBally) {
		this.posBally = posBally;
	}

	public int getVelBallx() {
		return velBallx;
	}

	public void setVelBallx(int velBallx) {
		this.velBallx = velBallx;
	}

	public int getVelBally() {
		return velBally;
	}

	public void setVelBally(int velBally) {
		this.velBally = velBally;
	}
	@Override
	public String toString() {
		return "{\"id\":" + id + ",\"posBallx\":" + posBallx + ",\"posBally\":" + posBally + ",\"velBallx\":" + velBallx
				+ ",\"velBally\":" + velBally + "]";
	}
	
}
