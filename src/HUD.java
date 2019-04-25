import processing.core.PApplet;

class HUD {
    private PApplet p;
    public int health;
    public int coreHealth;

    HUD() {
        p = Main.processing;
        health = 100;
        coreHealth = 100;
    }

    void show() {
        p.ellipseMode(p.CORNER);
        p.fill(250, 0, 0);
        p.ellipse(5, 5, 25, 25);

        p.fill(255);
        p.textSize(20);
        p.text(health, 35, 25);

        p.ellipseMode(p.CORNER);
        p.fill(100, 100, 250);
        p.rect(5, 55, 25, 25);

        p.fill(255);
        p.textSize(20);
        p.text(coreHealth, 35, 75);


    }
}
