package Noentiendo.Ping;

public class Estado {
	private long id;
	

	private int lastTouch;
	private int resetOnline;
	
	Estado() {
		
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