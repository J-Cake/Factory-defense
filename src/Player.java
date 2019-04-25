import processing.core.PApplet;

public class Player extends GameObject {
    private PApplet p;

    Player() {
        p = Main.processing;
    }

    @Override
    public void show() {
        p.fill(0, 255, 0);
    }

    @Override
    void update() {

    }
}
