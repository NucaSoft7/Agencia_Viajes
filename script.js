// Sample Travel Package Data
const allPackages = [
    // África
    {
        id: 1,
        name: "Maravillas de Egipto",
        destination: "Egipto",
        description: "<em>Explora las Pirámides de Giza, Templos de Luxor, Relájate en el Mar Rojo</em>",
        imageColor: "#DAA520",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg",
        continent: "África",
        about: "Egipto, cuna de una de las civilizaciones más antiguas, ofrece una mezcla fascinante de historia, cultura y belleza natural.",
        details: [
            { site: "Pirámides de Giza", description: "Antiguas estructuras faraónicas, las más famosas de Egipto.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pyramids_at_Giza.jpg/800px-Pyramids_at_Giza.jpg" },
            { site: "Luxor", description: "Ciudad con templos y tumbas antiguas, incluyendo el Valle de los Reyes.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Luxor_Temple_from_the_air.jpg/800px-Luxor_Temple_from_the_air.jpg" },
            { site: "Mar Rojo", description: "Famoso por sus arrecifes de coral y actividades acuáticas.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sharm_El_Sheikh_Red_Sea_Coral_Reef.jpg/800px-Sharm_El_Sheikh_Red_Sea_Coral_Reef.jpg" }
        ]
    },
    {
        id: 2,
        name: "Aventura Sudafricana",
        destination: "Sudáfrica",
        description: "<em>Safari en Kruger, Vistas desde Table Mountain, Recorrido por la Ruta Jardín</em>",
        imageColor: "#FFBF00",
        continent: "África",
        about: "Sudáfrica, un país de diversidad asombrosa, desde sus safaris de vida silvestre hasta sus paisajes urbanos vibrantes.",
        details: [
            { site: "Kruger National Park", description: "Uno de los parques nacionales más grandes de África.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kruger_National_Park_Landscape.jpg/800px-Kruger_National_Park_Landscape.jpg" },
            { site: "Table Mountain", description: "Icono de Ciudad del Cabo con vistas panorámicas.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Table_Mountain_at_sunset_from_Lions_Head.jpg/800px-Table_Mountain_at_sunset_from_Lions_Head.jpg" },
            { site: "Garden Route", description: "Ruta escénica a lo largo de la costa sur.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Knysna_Heads_from_Leisure_Isle.jpg/800px-Knysna_Heads_from_Leisure_Isle.jpg" }
        ]
    },
    {
        id: 3,
        name: "Encantos de Marruecos",
        destination: "Marruecos",
        description: "<em>Sumérgete en los zocos de Marrakech, Historia de Fez, Desierto del Sahara</em>",
        imageColor: "#C85A17",
        continent: "África",
        about: "Marruecos, un país de contrastes, donde las antiguas tradiciones se encuentran con la modernidad en un torbellino de colores y aromas.",
        details: [
            { site: "Marrakech", description: "Ciudad vibrante con zocos y arquitectura histórica.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Koutoubia_Mosque_Marrakesh_Morocco.jpg/800px-Koutoubia_Mosque_Marrakesh_Morocco.jpg" },
            { site: "Fez", description: "Ciudad antigua conocida por su medina y artesanía.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Fez_Bab_Bou_Jeloud.jpg/800px-Fez_Bab_Bou_Jeloud.jpg" },
            { site: "Desierto del Sahara", description: "Extenso desierto con dunas y paisajes impresionantes.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Sahara_dunes.jpg/800px-Sahara_dunes.jpg" }
        ]
    },
    {
        id: 4,
        name: "Safari Fotográfico en Kenia",
        destination: "Kenia",
        description: "<em>Observa la Gran Migración en Masai Mara, Flamencos en Lago Nakuru, Monte Kenia</em>",
        imageColor: "#F4A460",
        continent: "África",
        about: "Kenia, un destino de ensueño para los amantes de la naturaleza, hogar de algunos de los paisajes y la vida silvestre más espectaculares de África.",
        details: [
            { site: "Masai Mara", description: "Reserva famosa por la Gran Migración de ñus y cebras.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Masai_Mara_Kenya.jpg/800px-Masai_Mara_Kenya.jpg" },
            { site: "Lago Nakuru", description: "Lago conocido por su gran población de flamencos.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Lake_Nakuru_Flamingos.jpg/800px-Lake_Nakuru_Flamingos.jpg" },
            { site: "Monte Kenia", description: "La montaña más alta de Kenia y la segunda más alta de África.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Mount_Kenya_from_the_air.jpg/800px-Mount_Kenya_from_the_air.jpg" }
        ]
    },
    {
        id: 5,
        name: "Tesoros de Tanzania",
        destination: "Tanzania",
        description: "<em>Vive el Serengeti, Conquista el Kilimanjaro, Descansa en las playas de Zanzíbar</em>",
        imageColor: "#BDB76B",
        continent: "África",
        about: "Tanzania, un país de maravillas naturales, desde las llanuras del Serengeti hasta las cumbres nevadas del Kilimanjaro y las playas tropicales de Zanzíbar.",
        details: [
            { site: "Serengeti", description: "Extensa llanura con vida salvaje diversa.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Serengeti_National_Park_Tanzania.jpg/800px-Serengeti_National_Park_Tanzania.jpg" },
            { site: "Kilimanjaro", description: "La montaña más alta de África.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kilimanjaro_at_sunset_from_airplane.jpg/800px-Kilimanjaro_at_sunset_from_airplane.jpg" },
            { site: "Zanzíbar", description: "Archipiélago con playas paradisíacas y cultura swahili.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Zanzibar_beach.jpg/800px-Zanzibar_beach.jpg" }
        ]
    },

    // América Central
    {
        id: 6,
        name: "Legado Maya en Guatemala",
        destination: "Guatemala",
        description: "Descubre las ruinas de Tikal, la belleza del Lago Atitlán y la colonial Antigua.",
        imageColor: "#4682B4",
        continent: "América Central",
        details: [
            { site: "Tikal", description: "Una de las ciudades mayas más grandes e importantes.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Tikal_Temple_I.jpg/800px-Tikal_Temple_I.jpg" },
            { site: "Lago Atitlán", description: "Lago rodeado de volcanes y pueblos indígenas.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lago_de_Atitl%C3%A1n%2C_Guatemala.jpg/800px-Lago_de_Atitl%C3%A1n%2C_Guatemala.jpg" },
            { site: "Antigua", description: "Ciudad colonial con arquitectura barroca y calles empedradas.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Antigua_Guatemala_Volcanoes.jpg/800px-Antigua_Guatemala_Volcanoes.jpg" }
        ]
    },
    {
        id: 7,
        name: "Paraíso Caribeño en Belice",
        destination: "Belice",
        description: "Bucea en el Gran Agujero Azul, relájate en Cayo Ambergris y explora Caracol.",
        imageColor: "#5F9EA0",
        continent: "América Central",
        details: [
            { site: "Gran Agujero Azul", description: "Famoso sumidero marino y paraíso para buceadores.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Great_Blue_Hole_Lighthouse_Reef_Atoll_Belize_2011.jpg/800px-Great_Blue_Hole_Lighthouse_Reef_Atoll_Belize_2011.jpg" },
            { site: "Cayo Ambergris", description: "Isla caribeña con playas de arena blanca y arrecifes de coral.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Ambergris_Caye_Belize.jpg/800px-Ambergris_Caye_Belize.jpg" },
            { site: "Caracol", description: "Sitio arqueológico maya con templos y plazas antiguas.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Caracol_Cahal_Pech.jpg/800px-Caracol_Cahal_Pech.jpg" }
        ]
    },
    {
        id: 8,
        name: "Joyas de El Salvador",
        destination: "El Salvador",
        description: "Recorre la Ruta de las Flores, visita la 'Pompeya de América' Joya de Cerén y admira sus volcanes.",
        imageColor: "#8A2BE2",
        continent: "América Central",
        details: [
            { site: "Ruta de las Flores", description: "Ruta escénica con coloridos pueblos y paisajes florales.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ataco_El_Salvador.jpg/800px-Ataco_El_Salvador.jpg" },
            { site: "Joya de Cerén", description: "Sitio arqueológico preservado por ceniza volcánica.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Joya_de_Ceren_El_Salvador.jpg/800px-Joya_de_Ceren_El_Salvador.jpg" },
            { site: "Volcanes de El Salvador", description: "Paisajes volcánicos impresionantes.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Volc%C3%A1n_de_Santa_Ana%2C_El_Salvador.jpg/800px-Volc%C3%A1n_de_Santa_Ana%2C_El_Salvador.jpg" }
        ]
    },
    {
        id: 9,
        name: "Aventura Hondureña",
        destination: "Honduras",
        description: "Explora las ruinas mayas de Copán, disfruta las playas de Roatán y la naturaleza de La Ceiba.",
        imageColor: "#00CED1",
        continent: "América Central",
        details: [
            { site: "Copán", description: "Sitio arqueológico maya con impresionantes estelas y jeroglíficos.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Copan_Acropolis.jpg/800px-Copan_Acropolis.jpg" },
            { site: "Roatán", description: "Isla caribeña con playas de arena blanca y arrecifes de coral.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/West_Bay_Beach_Roatan.jpg/800px-West_Bay_Beach_Roatan.jpg" },
            { site: "La Ceiba", description: "Ciudad costera rodeada de naturaleza exuberante.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/La_Ceiba_Honduras.jpg/800px-La_Ceiba_Honduras.jpg" }
        ]
    },
    {
        id: 10,
        name: "Nicaragua Colonial y Natural",
        destination: "Nicaragua",
        description: "Pasea por Granada, escapa a las Islas del Maíz y visita la histórica León.",
        imageColor: "#FF6347",
        continent: "América Central",
        details: [
            { site: "Granada", description: "Ciudad colonial con arquitectura colorida y vistas al lago Nicaragua.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Granada_Nicaragua_Central_Park.jpg/800px-Granada_Nicaragua_Central_Park.jpg" },
            { site: "Islas del Maíz", description: "Islas caribeñas con playas tranquilas y ambiente relajado.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Little_Corn_Island_Nicaragua.jpg/800px-Little_Corn_Island_Nicaragua.jpg" },
            { site: "León", description: "Ciudad histórica con arquitectura colonial y rica cultura.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Leon_Cathedral_Nicaragua.jpg/800px-Leon_Cathedral_Nicaragua.jpg" }
        ]
    },
    {
        id: 11,
        name: "Pura Vida en Costa Rica",
        destination: "Costa Rica",
        description: "Admira el volcán Arenal, explora el bosque nuboso de Monteverde y el Parque Nacional Manuel Antonio.",
        imageColor: "#32CD32",
        continent: "América Central",
        details: [
            { site: "Volcán Arenal", description: "Volcán activo rodeado de selva tropical y aguas termales.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Arenal_Volcano_Costa_Rica.jpg/800px-Arenal_Volcano_Costa_Rica.jpg" },
            { site: "Monteverde", description: "Bosque nuboso con exuberante vegetación y vida silvestre diversa.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Monteverde_Cloud_Forest_Costa_Rica.jpg/800px-Monteverde_Cloud_Forest_Costa_Rica.jpg" },
            { site: "Parque Nacional Manuel Antonio", description: "Parque nacional con playas de arena blanca y selva tropical.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Manuel_Antonio_National_Park_Costa_Rica.jpg/800px-Manuel_Antonio_National_Park_Costa_Rica.jpg" }
        ]
    },
    {
        id: 12,
        name: "Contrastes de Panamá",
        destination: "Panamá",
        description: "Maravíllate con el Canal, navega por las islas San Blas y relájate en Bocas del Toro.",
        imageColor: "#FFD700",
        continent: "América Central",
        details: [
            { site: "Canal de Panamá", description: "Obra de ingeniería que conecta el Atlántico y el Pacífico.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Panama_Canal_Locks.jpg/800px-Panama_Canal_Locks.jpg" },
            { site: "Islas San Blas", description: "Archipiélago caribeño con playas de arena blanca y cultura kuna.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/San_Blas_Islands_Panama.jpg/800px-San_Blas_Islands_Panama.jpg" },
            { site: "Bocas del Toro", description: "Archipiélago caribeño con playas, selva y ambiente relajado.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Bocas_del_Toro_Panama.jpg/800px-Bocas_del_Toro_Panama.jpg" }
        ]
    },
    {
        id: 13,
        name: "Ritmo Dominicano",
        destination: "República Dominicana",
        description: "Disfruta de Punta Cana, la bahía de Samaná, la Zona Colonial y el fresco Jarabacoa.",
        imageColor: "#1E90FF",
        continent: "América Central",
        details: [
            { site: "Punta Cana", description: "Destino turístico con playas de arena blanca y resorts de lujo.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Punta_Cana_Beach_Dominican_Republic.jpg/800px-Punta_Cana_Beach_Dominican_Republic.jpg" },
            { site: "Bahía de Samaná", description: "Bahía con ballenas jorobadas y paisajes naturales.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Samana_Bay_Dominican_Republic.jpg/800px-Samana_Bay_Dominican_Republic.jpg" },
            { site: "Zona Colonial", description: "Centro histórico de Santo Domingo con arquitectura colonial.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Zona_Colonial_Santo_Domingo.jpg/800px-Zona_Colonial_Santo_Domingo.jpg" },
            { site: "Jarabacoa", description: "Ciudad de montaña con clima fresco y paisajes naturales.", imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c6/cc/ae/img-20170611-134236558.jpg?w=700&h=-1&s=1" }
        ]
    },

    // Oceanía
    {
        id: 14,
        name: "Iconos de Australia",
        destination: "Australia",
        description: "Visita la Ópera de Sídney, explora la Gran Barrera de Coral y admira Uluru.",
        imageColor: "#DC143C",
        continent: "Oceanía",
        details: [
            { site: "Ópera de Sídney", description: "Edificio icónico con forma de conchas.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Sydney_Opera_House_Sails.jpg/800px-Sydney_Opera_House_Sails.jpg" },
            { site: "Gran Barrera de Coral", description: "El sistema de arrecifes más grande del mundo.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Great_Barrier_Reef_Australia.jpg/800px-Great_Barrier_Reef_Australia.jpg" },
            { site: "Uluru", description: "Monolito de arenisca sagrado para los aborígenes australianos.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Uluru_Australia.jpg/800px-Uluru_Australia.jpg" }
        ]
    },
    {
        id: 15,
        name: "Paisajes de Nueva Zelanda",
        destination: "Nueva Zelanda",
        description: "Navega por los fiordos, siente la energía geotérmica de Rotorua y visita Hobbiton.",
        imageColor: "#2E8B57",
        continent: "Oceanía",
        details: [
            { site: "Fiordos", description: "Fiordos impresionantes con cascadas y vida marina.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Milford_Sound_New_Zealand.jpg/800px-Milford_Sound_New_Zealand.jpg" },
            { site: "Rotorua", description: "Ciudad geotérmica con géiseres y piscinas de barro.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Rotorua_New_Zealand.jpg/800px-Rotorua_New_Zealand.jpg" },
            { site: "Hobbiton", description: "Set de filmación de El Señor de los Anillos y El Hobbit.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Hobbiton_Movie_Set.jpg/800px-Hobbiton_Movie_Set.jpg" }
        ]
    },
    {
        id: 16,
        name: "Relax en Fiyi",
        destination: "Fiyi",
        description: "Disfruta de las Islas Mamanuca, navega por la Laguna Azul y haz snorkel en arrecifes vibrantes.",
        imageColor: "#87CEEB",
        continent: "Oceanía",
        details: [
            { site: "Islas Mamanuca", description: "Islas tropicales con playas de arena blanca y resorts de lujo.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mamanuca_Islands_Fiji.jpg/800px-Mamanuca_Islands_Fiji.jpg" },
            { site: "Laguna Azul", description: "Laguna de aguas cristalinas ideal para nadar y relajarse.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Blue_Lagoon_Fiji.jpg/800px-Blue_Lagoon_Fiji.jpg" },
            { site: "Arrecifes vibrantes", description: "Arrecifes de coral con vida marina diversa.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Coral_Reef_Fiji.jpg/800px-Coral_Reef_Fiji.jpg" }
        ]
    },
    {
        id: 17,
        name: "Cultura y Buceo en Papúa Nueva Guinea",
        destination: "Papúa Nueva Guinea",
        description: "Conoce culturas tribales ancestrales, bucea en aguas ricas y haz senderismo por paisajes únicos.",
        imageColor: "#D2691E",
        continent: "Oceanía",
        details: [
            { site: "Cultura tribal", description: "Culturas tribales ancestrales con tradiciones únicas.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Papua_New_Guinea_Tribal_Gathering.jpg/800px-Papua_New_Guinea_Tribal_Gathering.jpg" },
            { site: "Buceo", description: "Aguas ricas con vida marina diversa.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Papua_New_Guinea_Diving.jpg/800px-Papua_New_Guinea_Diving.jpg" },
            { site: "Senderismo", description: "Paisajes únicos con montañas y selva.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Papua_New_Guinea_Hiking.jpg/800px-Papua_New_Guinea_Hiking.jpg" }
        ]
    },
    {
        id: 18,
        name: "Paraíso Natural en Samoa",
        destination: "Samoa",
        description: "Descubre cascadas espectaculares, playas vírgenes y refréscate en la piscina natural To Sua.",
        imageColor: "#6A5ACD",
        continent: "Oceanía",
        details: [
            { site: "Cascadas espectaculares", description: "Cascadas impresionantes en medio de la selva.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Samoa_Cascades.jpg/800px-Samoa_Cascades.jpg" },
            { site: "Playas vírgenes", description: "Playas de arena blanca con aguas cristalinas.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Samoa_Beach.jpg/800px-Samoa_Beach.jpg" },
            { site: "Piscina natural To Sua", description: "Piscina natural rodeada de exuberante vegetación.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/To_Sua_Ocean_Trench_Samoa.jpg/800px-To_Sua_Ocean_Trench_Samoa.jpg" }
        ]
    },

    // América del Sur
    {
        id: 19,
        name: "Vibrante Brasil",
        destination: "Brasil",
        description: "Siente el ritmo de Río de Janeiro, explora la Amazonía y maravíllate con las Cataratas del Iguazú.",
        imageColor: "#008000",
        continent: "América del Sur",
        details: [
            { site: "Río de Janeiro", description: "Ciudad famosa por sus playas, el Cristo Redentor y el Carnaval.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Rio_de_Janeiro_Brazil.jpg/800px-Rio_de_Janeiro_Brazil.jpg" },
            { site: "Amazonía", description: "La selva tropical más grande del mundo.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Amazon_Rainforest_Brazil.jpg/800px-Amazon_Rainforest_Brazil.jpg" },
            { site: "Cataratas del Iguazú", description: "Cataratas impresionantes en la frontera con Argentina.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Iguazu_Falls_Brazil.jpg/800px-Iguazu_Falls_Brazil.jpg" }
        ]
    },
    {
        id: 20,
        name: "Pasión Argentina",
        destination: "Argentina",
        description: "Baila tango en Buenos Aires, recorre la vasta Patagonia y visita las Cataratas del Iguazú.",
        imageColor: "#ADD8E6",
        continent: "América del Sur",
        details: [
            { site: "Buenos Aires", description: "Ciudad cosmopolita con arquitectura europea y tango.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Buenos_Aires_Argentina.jpg/800px-Buenos_Aires_Argentina.jpg" },
            { site: "Patagonia", description: "Región extensa con montañas, lagos y glaciares.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Patagonia_Argentina.jpg/800px-Patagonia_Argentina.jpg" },
            { site: "Cataratas del Iguazú", description: "Cataratas impresionantes en la frontera con Brasil.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Iguazu_Falls_Argentina.jpg/800px-Iguazu_Falls_Argentina.jpg" }
        ]
    },
    {
        id: 21,
        name: "Perú Milenario",
        destination: "Perú",
        description: "Descubre Machu Picchu, explora Cusco y navega por el Lago Titicaca.",
        imageColor: "#E6E6FA",
        continent: "América del Sur",
        details: [
            { site: "Machu Picchu", description: "Ciudadela inca en las montañas andinas.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/800px-Machu_Picchu%2C_Peru.jpg" },
            { site: "Cusco", description: "Ciudad histórica con arquitectura inca y colonial.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Cusco_Plaza_de_Armas.jpg/800px-Cusco_Plaza_de_Armas.jpg" },
            { site: "Lago Titicaca", description: "Lago navegable más alto del mundo.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Lake_Titicaca_Peru.jpg/800px-Lake_Titicaca_Peru.jpg" }
        ]
    },
    {
        id: 22,
        name: "Chile: Tierra de Extremos",
        destination: "Chile",
        description: "Desde el Desierto de Atacama hasta las Torres del Paine, pasando por Santiago.",
        imageColor: "#B0C4DE",
        continent: "América del Sur",
        details: [
            { site: "Desierto de Atacama", description: "El desierto más seco del mundo.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Atacama_Desert_Chile.jpg/800px-Atacama_Desert_Chile.jpg" },
            { site: "Torres del Paine", description: "Parque nacional con montañas, glaciares y lagos.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Torres_del_Paine_Chile.jpg/800px-Torres_del_Paine_Chile.jpg" },
            { site: "Santiago", description: "La capital de Chile.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Santiago_Chile.jpg/800px-Santiago_Chile.jpg" }
        ]
    },
    {
        id: 23,
        name: "Colombia Mágica",
        destination: "Colombia",
        description: "Recorre la histórica Cartagena, la innovadora Medellín y la hermosa Zona Cafetera.",
        imageColor: "#FFFF00",
        continent: "América del Sur",
        details: [
            { site: "Cartagena", description: "Ciudad histórica con arquitectura colonial y playas.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Cartagena_Colombia.jpg/800px-Cartagena_Colombia.jpg" },
            { site: "Medellín", description: "Ciudad innovadora con teleféricos y parques.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Medellin_Colombia.jpg/800px-Medellin_Colombia.jpg" },
            { site: "Zona Cafetera", description: "Región montañosa con plantaciones de café.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Zona_Cafetera_Colombia.jpg/800px-Zona_Cafetera_Colombia.jpg" }
        ]
    },

    // América del Norte
    {
        id: 24,
        name: "Experiencia en Estados Unidos",
        destination: "Estados Unidos",
        description: "Descubre Nueva York, el Gran Cañón y la naturaleza de Yosemite.",
        imageColor: "#D3D3D3",
        continent: "América del Norte",
        details: [
            { site: "Nueva York", description: "Ciudad cosmopolita con rascacielos y museos.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/New_York_City_Skyline.jpg/800px-New_York_City_Skyline.jpg" },
            { site: "Gran Cañón", description: "Cañón inmenso con paisajes impresionantes.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Grand_Canyon_National_Park.jpg/800px-Grand_Canyon_National_Park.jpg" },
            { site: "Yosemite", description: "Parque nacional con cascadas y montañas.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Yosemite_Valley_California.jpg/800px-Yosemite_Valley_California.jpg" }
        ]
    },
    {
        id: 25,
        name: "Maravillas de Canadá",
        destination: "Canadá",
        description: "Visita Toronto, las Cataratas del Niágara y el Parque Nacional Banff.",
        imageColor: "#FF69B4",
        continent: "América del Norte",
        details: [
            { site: "Toronto", description: "Ciudad cosmopolita con la Torre CN y museos.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Toronto_Skyline_Night.jpg/800px-Toronto_Skyline_Night.jpg" },
            { site: "Cataratas del Niágara", description: "Cataratas impresionantes en la frontera con Estados Unidos.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Niagara_Falls_Canada.jpg/800px-Niagara_Falls_Canada.jpg" },
        ]
    }
];

// Function to create placeholder SVG
function createPlaceholderSvg(color = '#ccc', text = 'Imagen') {
    const tcColor = typeof tinycolor !== 'undefined' ? tinycolor(color) : null;
    const darkerColor = tcColor ? tcColor.darken(10).toString() : '#b3b3b3';
    const gradientId = `grad-${Math.random().toString(16).slice(2)}`;

    return `
    <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" class="card-img-top">
        <defs>
            <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${darkerColor};stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="100" height="60" fill="url(#${gradientId})"/>
        <text x="50" y="35" font-size="8" text-anchor="middle" fill="#fff" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.4);">${text}</text>
    </svg>`;
}

// Function to render package cards using Bootstrap structure
function renderPackages(packagesToRender) {
    const packagesList = $('#packages-list');
    packagesList.addClass('filtering');
    $('.loading-message', packagesList).remove();

    setTimeout(() => {
        packagesList.empty();

        if (packagesToRender.length === 0) {
            packagesList.append('<div class="col-12"><p class="no-results-message text-center text-muted">No se encontraron paquetes que coincidan con tu búsqueda.</p></div>');
        } else {
            const groupedPackages = packagesToRender.reduce((acc, pkg) => {
                const continent = pkg.continent;
                if (!acc[continent]) {
                    acc[continent] = [];
                }
                acc[continent].push(pkg);
                return acc;
            }, {});

            for (const continent in groupedPackages) {
                if (groupedPackages.hasOwnProperty(continent)) {
                    const continentPackages = groupedPackages[continent];

                    packagesList.append(`<div class="col-12"><h3 class="continent-heading">${continent}</h3></div>`);

                    continentPackages.forEach((pkg, index) => {
                        const packageCardHtml = `
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card h-100 shadow-sm package-card animate-on-scroll" data-destination="${pkg.destination.toLowerCase()}" style="--animation-order: ${index};">
                                    ${createPlaceholderSvg(pkg.imageColor, pkg.destination)}
                                    <div class="card-body d-flex flex-column">
                                        <h5 class="card-title">${pkg.name}</h5>
                                        <p class="card-text flex-grow-1">${pkg.description}</p>
                                        <div class="mt-auto d-flex justify-content-between align-items-center">
                                            <span class="badge bg-secondary destination-tag">${pkg.destination}</span>
                                            <button class="btn btn-primary btn-sm details-btn">Ver Detalles</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                        const $newCardWrapper = $(packageCardHtml).appendTo(packagesList);
                        observeElement($newCardWrapper.find('.package-card')[0]);
                    });
                }
            }
        }

        packagesList.removeClass('filtering');

    }, 150);
}

// Function to filter packages
function filterPackages() {
    const filterValue = $('#destination-filter').val().trim().toLowerCase();
    const clearButton = $('#clear-filter-btn');
    let filteredPackages;

    if (!filterValue) {
        filteredPackages = allPackages;
        clearButton.hide();
    } else {
        filteredPackages = allPackages.filter(pkg =>
            pkg.destination.toLowerCase().includes(filterValue) ||
            pkg.name.toLowerCase().includes(filterValue) ||
            pkg.continent.toLowerCase().includes(filterValue)
        );
        clearButton.show();
    }
    renderPackages(filteredPackages);
}

// --- Intersection Observer for Animations ---
let observer;

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
        }
    });
}

function observeElement(element) {
    if (observer && element) {
        observer.observe(element);
    }
}

function initScrollObserver() {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll:not(.package-card)');
    const cardElements = document.querySelectorAll('.package-card.animate-on-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    observer = new IntersectionObserver(handleIntersection, observerOptions);

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

$(document).ready(function () {

    // Initialize Slick Carousel
    $('.image-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    // Render initial packages
    renderPackages(allPackages);

    // Filter Input Handling
    let filterTimeout;
    $('#destination-filter').on('input', function () {
        clearTimeout(filterTimeout);
        filterTimeout = setTimeout(filterPackages, 300);
    });

    // Clear Filter Button
    $('#clear-filter-btn').on('click', function () {
        $('#destination-filter').val('').trigger('input');
    });

    // Smooth Scrolling for Navbar Links
    $('.navbar a.nav-link[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            var navHeight = $('.navbar').outerHeight() || 70;
            $('html, body').stop().animate({
                scrollTop: target.offset().top - navHeight
            }, 600, 'swing');

            var navbarToggler = $('.navbar-toggler');
            if (navbarToggler.attr('aria-expanded') === 'true') {
                navbarToggler.trigger('click');
            }
        }
    });

    // Add Destinations link
    $('.navbar-nav').append('<li class="nav-item"><a class="nav-link" href="destinations.html">Todos los Destinos</a></li>');


    // Initialize Scroll Animations
    initScrollObserver();

    // Initial Load Animations 
    $('.animate-on-load').each(function (index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(-20px)',
            'transition': `opacity 0.5s ease-out ${index * 0.15}s, transform 0.5s ease-out ${index * 0.15}s`
        });
        setTimeout(() => {
            $(this).css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }, 50);
    });

    // Handle clicks on details buttons
    $('#packages-list').on('click', '.details-btn', function () {
        const card = $(this).closest('.package-card');
        const destination = card.find('.destination-tag').text();
        window.location.href = `destinations.html?destination=${destination}`;
    });
});