




    const app = new Vue ({

      el: '#app',
      data:{
          user : {
              name: 'Nome Utente',
              avatar : '_1'

          },
          contactActive: 0,

          contacts: [
              {
                  name: 'Luca',
                  avatar: '_2',
                  visible: true,
                  messages:[
                            {
                             date: '10/01/2020 15:30:55',
                             text: 'Andiamo a giocare a calcetto oggi??',
                             status: 'sent'
                             },
                             {
                             date: '10/01/2020 15:50:00',
                             text: 'Che è da tanto che non andiamo',
                             status: 'sent'
                             },
                             {
                             date: '10/01/2020 16:15:22',
                             text: 'Ci sto!!',
                             status: 'received'
                             }
                             ],
                             },
                {
                   name: 'Davide',
                   avatar: '_3',
                   visible: true,
                   messages: [
                             {
                              date: '20/03/2020 16:30:00',
                              text: 'Ciao come stai?',
                              status: 'sent'
                              },
                              {
                               date: '20/03/2020 16:30:55',
                               text: 'Bene grazie! Stasera ci vediamo?',
                               status: 'received'
                               },
                               {
                               date: '20/03/2020 16:35:00',
                               text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                               status: 'sent'
                               }
                               ],
                               },  

                 {
                     name: 'Christian',
                     avatar: '_4',
                     visible: true,
                     messages: [
                                 {
                                 date: '20/03/2020 16:30:00',
                                 text: 'Hai visto la partita?',
                                 status: 'sent'
                                },
                                {
                                 date: '20/03/2020 16:30:55',
                                 text: 'no quanto è finita?',
                                status: 'received'
                                },
                                {
                                date: '20/03/2020 16:35:00',
                                 text: '3 set a 0 per federer!',
                                status: 'sent'
                                }
                                ],
                                },
                 {
                    name: 'Gabriele',
                    avatar: '_5',
                     visible: true,
                    messages: [
                                {
                                date: '20/03/2020 16:30:00',
                                 text: 'cosa mangiamo?',
                                 status: 'sent'
                                 },
                                {
                                date: '20/03/2020 16:30:55',
                                text: 'MC?',
                                status: 'received'
                                 },
                                 {
                                date: '20/03/2020 16:35:00',
                                text: 'Sono a dieta non posso!',
                                 status: 'sent'
                                }
                                ],
                                 },
                 {
                     name: 'Alessia',
                    avatar: '_6',
                     visible: true,
                     messages: [
                                 {
                                 date: '20/03/2020 16:30:00',
                                 text: 'Compriamo un cane?',
                                 status: 'sent'
                                },
                                {
                                date: '20/03/2020 16:30:55',
                                text: 'Siiiii daiiii',
                                 status: 'received'
                                 },
                                 {
                                date: '20/03/2020 16:35:00',
                                text: 'Dobbiamo pensarci bene però!',
                                status: 'sent'
                                }
                                ],
                                },
                {
                     name: 'Alessio',
                     avatar: '_7',
                     visible: true,
                     messages: [
                                {
                                 date: '20/03/2020 16:30:00',
                                 text: 'La ragazza mi ha lasciato',
                                status: 'sent'
                                 },
                                 {
                                 date: '20/03/2020 16:30:55',
                                text: 'Mi dispiace tanto....',
                                 status: 'received'
                                 },
                                 {
                                 date: '20/03/2020 16:35:00',
                                 text: 'Va bè, si vede che era destino',
                                 status: 'sent'
                                 }
                                 ],
                                 },
             ]

             
         },
         
         methods: {
             setContactActive(index){
                 this.contactActive = index;

             }
                
             }

         },
     );



//   Visualizzazione dinamica dei messaggi:
//  tramite la direttiva v-for,
//  visualizzare tutti i
//  messaggi relativi al 
// contatto attivo all’interno del pannello della conversazione
//  Click sul contatto mostra la
//  conversazione del contatto cliccato


// function stampaMessaggi(array){

    
  
//     // document.getElementById('centro').innerHTML = '';
  
  
    
//    array.forEach((element) =>{
   
  
  
  
 
//    const {text, date} = element;
//    const elementHtml =  `
//    <section id="centro" class="centro">

//    <div class="messaggi-inviati">
//        <p class="${text}${date}"></p>

//    </div>
//    <div class="messaggi-ricevuti">
//        <p class="${text}${date}"></p>

//    </div>
   



// </section>

//    `;
  
//     document.getElementById('centro').innerHTML += elementHtml ;
  
//    });
  
//   }



