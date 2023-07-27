let $departamento = document.getElementById('departamento');
let $provincia = document.getElementById('provincia');
let $distrito = document.getElementById('distrito');
let $colegio = document.getElementById('colegio');
let $nivel = document.getElementById('nivel');
let $grado = document.getElementById('grado');

let departamentos = ['Amazonas','Ancash','Apurimac','Arequipa','Ayacucho','Cajamarca', 'Cusco', 'Huancavelica','Huanuco','Ica','Junin', 'La Libertad',
                              'Lambayeque','Lima','Lima/Callao','Loreto','Madre de Dios','Moquegua','Pasco','Piura','Puno','San Martin','Tacna','Tumbes','Ucayali'];

let provincias = ['Bagua','Bongará','Chachapoyas','Condorcanqui','Luya', 'Rodriguez de Mendoza' ,'Utcubamba',
/*Ancash*/        'Aija','Antonio Raimondi' ,'Asunción' ,'Bolognesi' ,'Carhuaz' ,'Carlos Fermín Fitzcarrald' ,'Casma' ,'Corongo' ,'Huaraz' ,'Huari' ,'Huarmey' ,'Huaylas' ,'Mariscal Luzuriaga' ,'Ocros' ,'Pallasca' ,'Pomabamba','Recuay','Santa','Sihuas','Yungay',
/*Apurimac*/     'Abancay','Andahuaylas','Antabamba','Aymaraes','Chincheros','Cotabambas','Grau',
/*Arequipa*/      'Arequipa','Camaná', 'Caraveli','Castilla','Caylloma','Condesuyos','Islay','La Unión',
/*Ayacucho*/     'Cangallo','Huamanga','Huanca Sancos','Huanta','La Mar','Lucanas','Parinacochas','Páucar del Sara Sara','Sucre','Víctor Fajardo','Vilcas Huamán',
/*Cajamarca*/    'Cajabamba' ,'Cajamarca' ,'Celendín' ,'Chota' ,'Contumazá' ,'Cutervo' ,'Hualgayoc' ,'Jaén' ,'San Ignacio' ,'San Marcos' ,'San Miguel' ,'San Pablo' ,'Santa Cruz',
/*Cusco*/           'Acomayo','Anta','Calca','Canas','Canchis','Chumbivilcas','Cusco','Espinar','La convención','Paruro','Paucartambo','Quispicanchi','Urubamba',
/*Huancavelica*/ 'Acobamba','Angaraes','Castrovirreyna','Churcampa','Huancavelica','Huaytara','Tayacaja',
/*Huanuco*/       'Ambo','Dos de Mayo','Huacayabamba','Huamalies','Huanuco','Lauricocha','Leoncio Prado','Marañon','Pachitea','Puerto Inca','Yarowilca',
/*Ica*/                'Chincha','Ica','Nasca','Palpa','Pisco',
/*Junin*/             'Chanchamayo','Chupaca','Concepción','Huancayo','Jauja','Junin','Satipo','Tarma','Yauli',
/*La Libertad*/     'Ascope','Bolivar','Chepen','Gran Chimu','Julcan','Otuzco','Pacasmayo','Pataz','Sanchez Carrion','Santiago de Chuco','Trujillo','Viru',
/*Lambayeque*/   'Chiclayo','Ferreñafe','Lambayeque',
/*Lima*/              'Barranca','Cajatambo','Canta','Cañete','Huaral','Huarochiri','Huaura','Lima','Oyon','Yauyos',
/*Callao*/             'Callao',
/*Loreto*/            'Alto de Amazonas','Datem del Marañon','Loreto','Mariscal Ramón Castilla','Maynas','Putumayo','Requena','Ucayali',
/*Madre de Dios*/ 'Manu','Tahuamanu','Tambopata',
/*Moquegua */      'General Sanchez Cerro','Ilo','Mariscal Nieto',
/*Pasco */            'Daniel Alcides Carrion' ,'Oxapampa','Pasco',
/*Piura*/              'Ayabaca','Huancabamba','Morropon','Paita','Piura','Sechura','Sullana','Talara',
/*Puno*/              'Azangaro','Carabaya','Chucuito','El Collao','Huancane','Lampa','Melgar','Moho','Puno','San Antonio de Putina','San Roman','Sandia','Yunguyo',
/*San Martin*/      'Bellavista','El Dorado','Huallaga','Lamas','Mariscal Caceres','Moyobamba','Picota','Rioja','San Martin','Tocache',
/*Tacna*/             'Candarave','Jorge Basadre','Tacna','Tarata',
/*Tumbes*/          'Contralmirante Villar','Tumbes','Zarumilla',
/*Ucayali*/            'Atalaya','Coronel Portillo','Padre Abad','Purus'];

let distritos =[
      /*Bagua(01-Amazonas)*/ 'Aramango','Bagua','Copallin','El Parco','Imaza', 'La Peca',
/*Bongara(01-Amazonas) */'Chisquilla','Churuja','Corosha','Cuispes','Florida','Jazan','Jumbilla','Recta','San Carlos','Shipasbamba','Valera','Yambrasbamba',
/*Chachapoyas(01-Amazonas) */'Asuncion','Balsas','Chachapoyas','Cheto','Chiliquin','Chuquibamba','Granada','Huancas','La Jalca','Leimebamba','Levanto','Magdalena','Mariscal Castilla','Molinopampa','Montevideo','Olleros','Quinjalca','San Francisco de Dagua','San Isidro de Maino','Soloco','Sonche',
/*Condorcanqui(01-Amazonas) */ 'El Cenepa','Nieva','Rio Santiago',
/*Luya(01-Amazonas) */   'Camporredondo','Cocabamba','Colcamar','Conila','Inguilpata','Lamud','Longuita','Lonya Chico','Luya','Luya Viejo','Maria','Ocalli','Ocumal','Pisuquia','Providencia','San Cristobal','San Francisco del Yeso','San Jeronimo','San Juan de Lopecancha','Santa Catalina','Santo Tomas','Tingo','Trita',
/*Rodriguez de Mendoza(01-Amazonas) */ 'Chirimoto','Cochamal','Huambo','Limabamba','Longar','Mariscal Benavides','Milpucc','Omia','San Nicolas','Santa Rosa','Totora','Vista Alegre',
/*utcubamba(01-Amazonas) */    'Bagua Grande','Cajaruro','Cumba','El Milagro','Jamalca','Lonya Grande','Yamon',

/*Aija(02-Ancash) */                       'Aija','Coris','Huacllan','La Merced','Succha',
/*Antonio Raymondi(02-Ancash) */  'Aczo','Chaccho','Chingas','Llamellin','Mirgas','San Juan de Rontoy',
/*Asuncion(02-Ancash)*/                'Acochaca','Chacas',
/*Bolognesi(02-Ancash)*/               'Aberlardo Pardo Lezameta','Antonio Raimondi','Aquia','Cajacay','Canis','Chiquian','Colquioc','Huallanca','Huasta','Huayllacayan','La Primavera','Mangas','Pacllon','San Miguel de Corpanqui','Ticllos',
/*Carhuaz(02-Ancash)*/                 'Acopampa','Amashca','Anta','Ataquero','Carhuaz','Marcara','Pariahuanca','San Miguel de Aco','Shilla','Tinco','Yungar',
/*Carlos Fermin F.(02-Ancash)*/      'San Luis','San Nicolas','Yauya',
/*Casma(02-Ancash)*/                   'Buena Vista Alta','Casma','Comandante Noel','Yautan',
/*Corongo(02-Ancash)*/                 'Aco','Bambas','Corongo','Cusca','La Pampa','Yanac','Yupan',
/*Huaraz(02-Ancash)*/                   'Cochambamba','Colcabamba','Huanchay','Huaraz','Independencia','Jangas','La Libertad','Olleros','Pampas Grande','Pariacoto','Pira','Tarica',
/*Huari(02-Ancash)*/                     'Anra','Cajay','Chavin de Huantar','Huacachi','Huacchis','Huachis','Huantar','Huari','Masin','Paucas','Ponto','Rahuapampa','Rapayan','San Marcos','San Pedro de Chana','Uco',
/*Huarmey(02-Ancash)*/                'Cochapeti','Culebras','Huarmey','Huayan','Malvas',
/*Huaylas(02-Ancash)*/                  'Caraz','Huallanca','Huata','Huaylas','Mato','Pamparomas','Pueblo Libre','Santa Cruz','Santo Toribio','Yuracmarca',
/*Mariscal Luzuriaga(02-Ancash)*/   'Casca','Eleazar Guzman Barron','Fidel Olivas Escudero','Llama','Llumpa','Lucma','Musga','Piscobamba',
/*Ocros(02-Ancash)*/                     'Acas','Cajamarquilla','Carhuampa','Cochas','Congas','Llipa','Ocros','San Cristobal de Rajan','San Pedro','Santiago de Chilcas',
/*Pallasca(02-Ancash)*/                  'Bolognesi','Cabana','Conchucos','Huacaschuque','Huandoval','Lacambamba','Llapo','Pallasca','Pampas','Santa Rosa','Tauca',
/*Pomabamba(02-Ancash)*/            'Huayllan','Parobamba','Pomabamba','Quinuabamba',
/*Recuay(02-Ancash)*/                   'Catac','Cotaparaco','Huayllapampa','Llacllin','Marca','Pampas Chico','Pararin','Recuay','Tapacocha','Ticapampa',
/*Santa(02-Ancash)*/                     'Caceres del Peru','Chimbote','Coishco','Macate','Moro','Nepeña','Nuevo Chimbote','Samanco','Santa',
/*Sihuas(02-Ancash)*/                    'Acobamba','Alfonso Ugarte','Cashapampa','Chingalpo','Huayllabamba','Quiches','Ragash','San Juan','Sicsibamba','Sihuas',
/*Yungay(02-Ancash)*/                   'Cascapara','Mancos','Matacoto','Quillo','Ranrahirca','Shupluy','Yanama','Yungay',

/*Abancay(03-Apurimac)*/              'Abancay','Chacoche','Circa','Curahuasi','Huanipaca','Lambrama','Pichirhua','San Pedro de Cachora','Tamburco',
/*Andahuaylas(03-Apurimac)*/        'Andahuaylas','Andarapa','Chiara','Huancarama','Huancaray','Huayana','Jose Maria Arguedas','Kaquiabamba','Kishuara','Pacobamba','Pacucha','Pampachiri','Pomacocha','San Antonio de Cachi','San Jeronimo','San Miguel de Chaccrampa','Santa Maria de Chicmo','Talavera','Tumay Huaraca','Turpo',
/*Antabamba(03-Apurimac)*/          'Antabamba','El Oro','Huaquirca','Juan Espinoza Medrano','Oropesa','Pachaconas','Sabaino',
/*Aymaraes(03-Apurimac)*/            'Capaya','Caraybamba','Chalhuanca','Chapimarca','Colcabamba','Cotaruse','Ihuayllo','Justo Apu Sahuaraura','Lucre','Pocohuanca','San Juan de Chacña','Sañayca','Soraya','Tapairihua','Tintay','Toraya','Yanaca',
/*Chincheros(03-Apurimac)*/          'Ahuayro','Anco Huallo','Chincheros','Cocharcas','El Porvenir','Huaccana','Los Chankas','Ocabamba','Ongoy','Ranracancha','Rocchacc','Uranmarca',
/*Cotabambas(03-Apurimac)*/        'Challhuahuacho','Cotabambas','Coyllurqui','Haquira','Mara','Tambobamba',
/*Grau(03-Apurimac)*/                   'Chuquibambilla','Curasco','Curpahuasi','Huaillati','Mamara','Mariscal Gamarra','Micaela Bastidas','Pataypampa','Progreso','San Antonio','Santa Rosa','Turpay','Vilcabamba','Virundo',


/*Arequipa(04-Arequipa)*/             'Alto Selva Alegre','Arequipa','Cayma','Cerro Colorado','Characato','Chiguata','Jacobo Hunter','Jose Luis Bustamante y Rivero','La Joya','Mariano Melgar','Miraflores','Mollebaya','Paucarpata','Pocsi','Polobaya','Quequeña','Sabandia','Sachaca','San Juan de Siguas','San Juan de Tarucani','Santa Isabel de Siguas','Santa Rita de Sihuas','Socabaya','Tiabaya','Uchumayo','Vitor','Yanahuara','Yarabamba','Yura',
/*Camana(04-Arequipa)*/              'Camana','Jose Maria Quimper','Mariano Nicolas Valcarcel','Mariscal Caceres','Nicolas de Pierola','Ocoña','Quilca','Samuel Pastor',
/*Caraveli(04-Arequipa)*/               'Acari','Atico','Atiquipa','Bella Unión','Cahuacho','Caraveli','Chala','Chaparra','Huanuhuanu','Jaqui','Lomas','Quicacha','Yauca',
/*Castilla(04-Arequipa)*/                'Andagua','Aplao','Ayo','Chachas','Chilcaymarca','Choco','Huancarqui','Machaguay','Orcopampa','Pampacolca','Tipan','Uñon','Uraca','Viraco',
/*Caylloma(04-Arequipa)*/             'Achoma','Cabanaconde','Callalli','Caylloma','Chivay','Coporaque','Huambo','Huanca','Ichupampa','Lari','Lluta','Maca','Madrigal','Majes','San Antonio de Chuca','Sibayo','Tapay','Tisco','Tuti','Yanque',
/*Condesuyos(04-Arequipa)*/         'Andaray','Cayarani','Chichas','Chuquibamba','Iray','Rio Grande','Salamanca','Yanaquihua',
/*Islay(04-Arequipa)*/                   'Cocachacra','Dean Valdivia','Islay','Mejia','Mollendo','Punta de Bombón',
/*La Union(04-Arequipa)*/             'Alca','Charcana','Cotahuasi','Huaynacotas','Pampamarca','Puyca','Quechualla','Sayla','Tauria','Tomepampa','Toro',

/*Cangallo(05-Ayacucho)*/             'Cangallo','Chuschi','Los Morochucos','Maria Parado de Bellido','Paras','Totos',
/*Huamanga(05-Ayacucho)*/          'Acocro','Acos Vinchos','Andres Avelino Caceres Dorregaray','Ayacucho','Carmen Alto','Chiara','Jesus Nazareno','Ocros','Pacaycasa','Quinua','San José de Ticllas','San Juan Bautista','Santiago de Pischa','Socos','Tambillo','Vinchos',
/*Huanca Sancos(05-Ayacucho)*/    'Carapo','Sacsamarca','Sancos','Santiago de Lucanamarca',
/*Huanta(05-Ayacucho)*/               'Ayahuanco','Canayre','Chaca','Huamanguilla','Huanta','Iguain','Llochegua','Luricocha','Pucacolpa','Putis','Santillan','Silvia','Uchuraccay',
/*La Mar(05-Ayacucho)*/                'Anchihuay','Anco','Ayna','Chilcas','Chungui','Luis Carranza','Ninabamba','Oronccoy','Patibamba','Rio Magdalena','Samugari','San Miguel','Santa Rosa','Tambo','Union Progreso',
/*Lucanas(05-Ayacucho)*/              'Aucara','Cabana','Carmen Salcedo','Chaviña','Chipao','Huac-Huas','Laramate','Leoncio Prado','Llauta','Lucanas','Ocaña','Otoca','Puquio','Saisa','San Cristobal','San Juan','San Pedro','San Pedro de Palco','Sancos','Santa Ana de Huaycahuacho','Santa Lucia',
/*Parinacochas(05-Ayacucho)*/       'Chumpi','Coracora','Coronel Castañeda','Pacapausa','Pullo','Puyusca','San Francisco de Ravacayco','Upahuacho',
/*Paucar del Sara-Sara (05-Ayacucho)*/ 'Colta','Curculla','Lampa','Marcabamba','Oyolo','Pararca','Pausa','San Javier de Alpabamba','Sam Jose de Ushua','Sara Sara',
];


let colegios =['Perpetuo Socorro', 'Champagnat' , 'Trilce' , 'San Marcelo', 'Carmelitas'];

function mostrarLugares(arreglo, lugar) {
      let elementos = '<option selected disables>--Seleccione--</option>'
  
      for(let i = 0; i < arreglo.length; i++) {
          elementos += '<option value="' + arreglo[i] +'">' + arreglo[i] +'</option>'
      }
  
      lugar.innerHTML = elementos
  }
  
  mostrarLugares(departamentos, $departamento)
  
  function recortar(array, inicio, fin, lugar) {
      let recortar = array.slice(inicio, fin)
      mostrarLugares(recortar, lugar)
  }
  
  $departamento.addEventListener('change', function() {
      let valor = $departamento.value
  
      switch(valor) {
          case 'Amazonas':
              recortar(provincias, 0, 7, $provincia)
          break
          case 'Ancash':
              recortar(provincias, 7, 27, $provincia)
          break
          case 'Apurimac':
              recortar(provincias, 27, 34, $provincia)
          break
          case 'Arequipa':
              recortar(provincias, 34, 42, $provincia)
          break
          case 'Ayacucho':
              recortar(provincias, 42, 53, $provincia)
          break

          case 'La Libertad':
               recortar(provincias ,111 , 123 , $provincia)
      }
  
      $distrito.innerHTML = ''
  })
  
  $provincia.addEventListener('change', function() {
      let valor = $provincia.value
  
      if(valor == 'Cañete') {
          recortar(distritos, 0, 4, $distrito)
      } else if(valor == 'Huaral') {
          recortar(distritos, 4, 7, $distrito)
      } else {
          recortar(distritos, 7, 9, $distrito)
      }

     if(valor == 'Trujillo'){
        recortar (distritos , 10 , 20, $distrito)
     }

  })



 $distrito.addEventListener('change' , function(){
    let valor = $distrito.value

    if(valor=='Trujillo'){
        recortar (colegios , 0 , 6 , $colegio)
    }





 })
