let mobiles = {
    iphone:{
        iphone11:{
           
           photo: "images.png.src",
           display : "6.1‑inch (diagonal) all-screen LCD Multi-Touch display with IPS technology",
           Ram : "6-core CPU with 2 performance and 4 efficiency core",
           Camera: "Dual 12MP Wide and Ultra Wide cameras",
        },

        iphone12:{
            
            display : "6.1‑inch (diagonal) all‑screen OLED display 2532‑by‑1170-pixel resolution at 460 ppi",
            Ram : "6-core CPU with 2 performance and 4 efficiency core",
            Camera: "Dual 12MP Wide and Ultra Wide cameras",
         },

         iphone13:{
            
            display : "Super Retina XDR display 5.4‑inch (diagonal) all‑screen OLED display2340‑by‑1080-pixel resolution at 476 ppi",
            Ram : "6-core CPU with 3 performance and 4 efficiency core",
            Camera: "Dual 12MP Wide and Ultra Wide cameras",
         },
    },

    Samsung:{
      GalaxyUltra:{
            
           display : "Dynamic AMOLED 2X Capacitive Touchscreen, 1B Colors, Multitouch",
           Ram : "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
           Camera: "40 MP, f/2.2, 26mm (wide), 1/2.82, PDAF, Dual video call, Auto-HDR, Video (4K@30/60fps, 1080p@30fps) ",
        },

        GalaxyA23 :{
            
            display : "IPS LCD Capacitive Touchscreen, 16M Colors, Multitouch",
            Ram : "2.21 Ghz Octa Core",
            Camera: "8 MP, f/2.2, (wide), Video (1080p@30fps)  ",
         },

         GalaxyA34:{
            
            display : "Super AMOLED Capacitive Touchscreen, Multitouch",
            Ram : "2.2 Ghz Octa Core",
            Camera: "Triple Camera: 48 MP + 8 MP + 5 MP, LED Flash",
         },
    },

    Realme:{
      GTMaster:{
            
           display : "Super AMOLED Capacitive Touchscreen, Multitouch            ",
           Ram : "256GB Built-in, 8GB RAM             ",
           Camera: "Triple Camera: 64 MP, f/1.8, 25mm (wide), 1/2, PDAF + 8 MP, f/2.2, 16mm, (ultrawide), 1/4.0 + 2 MP, f/2.4, (macro), LED Flash " },

      pro9plus :{
            
            display : "Super AMOLED Capacitive Touchscreen, Multitouch            ",
            Ram : "128GB Built-in, 8GB RAM, UFS 2.2              ",
            Camera: "Triple Camera: 50 MP, f/1.8, 24mm (wide), 1/1.56, PDAF, OIS + 8 MP, f/2.2, 16mm (ultrawide), 1/4.0 + 2 MP, f/2.4, (macro), LED Flash ",
         },

         Realme9:{
            
            display : "Super AMOLED Capacitive Touchscreen, Multitouch",
            Ram : "128GB Built-in, 8GB RAM, UFS 2.2          ",
            Camera: "Triple Camera: 48 MP + 8 MP + 5 MP, LED Flash",
         },
    },
}

let mobilesDisplay = {};

function sending(){

    mobilesDisplay = {...(mobiles.iphone) }
    console.log(mobilesDisplay)

}
sending()


let arr = [];

function sending2 (){
   let arr = [mobiles]
   console.log(arr)
}

sending2 ()



