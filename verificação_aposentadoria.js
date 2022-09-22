//variaveis
nomes = ['Rhoger', 'Cléverson', 'Gleisberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
idade = [69,66,58,61,60,64,59,55]
trabalho = [31,29,30,26,25,24,26,29]

//funções
function aposentadoria(nome)
{
  //variaveis da função
   nomenalista = false
   anos=0
   tempotrabalho = 0

 for (ordem = 0; ordem < nomes.length; ordem++)
 {
   
   //execusão
   if(nome==nomes[ordem])
   {
     nomenalista = true
     anos = idade[ordem]
     tempotrabalho = trabalho[ordem]
   }
 }


 //execusão
 if (nomenalista)
 {
   if (anos >= 65 || tempotrabalho >=30 ||anos >=60 && tempotrabalho >=25)
    {
      console.log('parabens tem direito a aposentadoria')
    }
   else
    {
      console.log('infelizmente voce nao tem direito a aposentadoria')
    }
 }
 else 
 {
  console.log('nome invalido') 
 }
}
 aposentadoria('Rosiméri')    
 aposentadoria('Agripino')    
 aposentadoria('Rhoger')      
 aposentadoria('Hudnélson')   
 aposentadoria('Gleysberto')  
 aposentadoria('Regislane')   
 aposentadoria('Cléverson')   
 aposentadoria('Nádio')       
 aposentadoria('Wellison')    
 aposentadoria('Florisberto') 


