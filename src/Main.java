import processing.core.PApplet;

public class Main extends PApplet {

    static PApplet processing;

    private HUD hud;

    public static void main(String[] args) {
        PApplet.main("Main");
    }

    public void setup() {
        processing = this;
        hud = new HUD();
    }

    public void settings() {
        fullScreen();
    }

    public void draw() {
        background(0, 0, 0);
        hud.show();
    }
}
