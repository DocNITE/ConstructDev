import _engine from "../config.json" assert {type: "json"};
import {
    DEBUG, 
    MAJOR, MINOR, PATCH, 
} from "../SRC/define.js"
// Utils
import {changePageTitle} from "../SRC/utils.js"

// app PixiJS
let app = null;
if (_engine["SCREEN"]["FULLSCREEN"])
{
    app = new PIXI.Application({ 
        width: innerWidth, 
        height: innerHeight,
        resizeTo: window
    });
}
else
{
    app = new PIXI.Application({ 
        width: _engine["SCREEN"]["WIDTH"], 
        height: _engine["SCREEN"]["HEIGHT"]
    });
}
document.body.appendChild(app.view);

// MY TEST CODE BLOCK
let sprite = PIXI.Sprite.from("sample.png")
sprite.interactive = true;
sprite.buttonMode = true;
app.stage.addChild(sprite);

// Add a ticker callback to scroll the text up and down
let elapsed = 0.0;
app.ticker.add((delta) => {

  elapsed += delta;

});
// ENDE

/**
 * Main application loop
 * There running all processes
 */
//function main()
//{
//    requestAnimationFrame(main);
//}


/**
 * Main game engine initialisation.
 * This event handler will initialise the game engine.
 */
 function init()
 {
     if (DEBUG)
         console.log("[DEBUG]: Engine load...")
 
     // Change page title
     changePageTitle(
         _engine["ENGINE_NAME"] + " " +
         _engine["ENGINE_VER"][MAJOR] + "." +
         _engine["ENGINE_VER"][MINOR] + "." +
         _engine["ENGINE_VER"][PATCH]
         );

     //requestAnimationFrame(main);
 
     if (DEBUG)
         console.log("[DEBUG]: Engine succscefuly start...")
 }
 addEventListener("load", init);