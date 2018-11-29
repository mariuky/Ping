package Noentiendo.Ping;

public class Player {
	private long id;
	private int y;
	private int color;
	
	Player() {
		
	}
	
	public int getColor() {
		return color;
	}
	public void setColor(int color) {
		this.color = color;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public int getY() {
		return y;
	}
	public void setY(int y) {
		this.y = y;
	}
	@Override
	public String toString() {
		return "Player [id=" + id + ", y=" + y + ", color=" + color + "]";
	}
	
}