var UserDirections = alert("Zoom as far out as you can :)");


window.onload = function() {
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();



        var Width = window.innerWidth;
        var Height = window.innerHeight;

        var fontType = ["Serif", "Times", "Roboto", "Arial", "Verdana", "Helvetica",
            "Palatino", "Perpetua", "Sans-serif", "script normal", "script bold", "fraktur bold"
        ];
        var ColorType = ["#7FDBFF", "#39CCCC", "#3D9970", "#85144b"];
        var ColorValue = Math.floor(Math.random() * (ColorType.length));



        FontPicker = Math.floor(Math.random() * (fontType.length));
        ColorPicker = ColorType[ColorValue];
        console.log(ColorPicker);
        console.log(ColorValue)

        SizePicker = Math.floor((Math.random() * 500) + 100)
        console.log("size:" + SizePicker);
        var elem = document.createElement("div");

        elem.style.color = ColorPicker;
        elem.style.fontFamily = fontType[FontPicker];
        elem.style.fontSize = SizePicker + '%';

        elem.innerHTML = document.getElementById("hiddenInput").value;
        console.log(elem.textContent);
        elem.style.position = "absolute";
        elem.style.left = Math.round(Math.random() * Width) + "px";
        elem.style.top = Math.round(Math.random() * Height) + "px";
        console.log(elem.style.left);
        console.log(elem.style.top);

        document.body.appendChild(elem);
        document.querySelector("form").reset();
    });
}