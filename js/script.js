




    const app = new Vue ({

      el: '#app',
      data:{
          user : {
              name: 'Nome Utente',
              avatar : '_1'

          },
          contactActive: 0,
          nuovoMessaggio : '',
          ricercaContatto: '',

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
                                 text: '3 set a 0 per Sinner!',
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
                                 text: 'Cosa mangiamo stase?',
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

             },

             

              invioMessaggio(){
                  if(this.nuovoMessaggio != ''){
                    const arrivoMessaggio = {
                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        text: this.nuovoMessaggio,
                        status: 'sent'
  
  
                    };
                    console.log(arrivoMessaggio);
                    this.contacts[this.contactActive].messages.push(arrivoMessaggio);
                    console.log(this.contacts[this.contactActive].messages);
                    this.nuovoMessaggio = '';

                   setTimeout(() =>{
                    const rispostaAutomatica = {
                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        text: 'ok',
                        status: 'received'
  
  
                    };
                    this.contacts[this.contactActive].messages.push(rispostaAutomatica);


                   },1000)

                  }
       
               

             },



            
           trovaContatto(){

            ricercaContatto.forEach((element)=> {
                console.log(element)
                
            });
            
               
                

                

                
            

        
            

            
           },

           



          

                
             }

         },
     );


// Milestone 2
//   Visualizzazione dinamica dei messaggi:
//  tramite la direttiva v-for,
//  visualizzare tutti i
//  messaggi relativi al 
// contatto attivo all’interno del pannello della conversazione
//  Click sul contatto mostra la
//  conversazione del contatto cliccato.


 // Milestone 3
//   Aggiunta di un messaggio: l’utente scrive 
// un testo nella parte bassa e digitando
 // “enter” il testo viene aggiunto al thread sopra,
//  come messaggio verde
 //  Risposta dall’interlocutore: ad ogni inserimento
//  di un messaggio, l’utente riceverà
 // un “ok” come risposta, che apparirà
//  dopo 1 secondo.

// Milestone 4
//  Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
// “mar” rimangono solo Marco e Martina)






