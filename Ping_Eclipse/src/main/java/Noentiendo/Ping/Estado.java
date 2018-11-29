package Noentiendo.Ping;

public class Estado {
	private long id;
	

	private int lastTouch;
	private int resetOnline;
	private int punt1;
	private int punt2;
	
	Estado() {
		
	}
	
	
	public int getPunt1() {
		return punt1;
	}


	public void setPunt1(int punt1) {
		this.punt1 = punt1;
	}


	public int getPunt2() {
		return punt2;
	}


	public void setPunt2(int punt2) {
		this.punt2 = punt2;
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getLastTouch() {
		return lastTouch;
	}

	public void setLastTouch(int lastTouch) {
		this.lastTouch = lastTouch;
	}

	public int getResetOnline() {
		return resetOnline;
	}

	public void setResetOnline(int resetOnline) {
		this.resetOnline = resetOnline;
	}
	
}