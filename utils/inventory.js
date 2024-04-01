import { v4 as uuid } from 'uuid'

let inventory = [
  {
    categories: ['camisa', 'manga comprida'], name: 'Camisa Manga comprida', price: '800', image: '/products/camisa_manga_comprida_preta.jpg', description: 'Fique um pouco. O sofá Timber charme chocolat está situado em cima de um acabamento em carvalho e exibe almofadas de assento e encosto de couro macio. Com o tempo, o estofamento totalmente anilina deste sofá de couro marrom desenvolverá uma aparência vintage desgastada. Aconchegue-se com sua gracinha (animal ou humana) e mergulhe em uma tigela de pipoca. Este sofá é realmente difícil de sair. Variações de cores naturais, rugas e vincos fazem parte das características únicas desse couro. Ele desenvolverá um visual vintage descontraído com uso regular.', brand: 'Fortunato Tapeçaria', currentInventory: 4 },
    
  {
    categories: ['jeans', 'bermuda'], name: 'Marcas Famosas', price: '800', image: '/products/bermudas_38.jpeg', description: 'Você não precisa sair para ser resistente. O sofá de couro cru Cigar apresenta uma estrutura robusta de madeira com cantos bloqueados e costuras brutas para aquele visual de Malboro. Este sofá de couro marrom é aconchegante em uma casa de campo, cabana ou condomínio. E o couro (o couro!) fica mais bonito com o uso: marcas sutis de caracteres como picadas de insetos, cicatrizes cicatrizadas e variação de grão refletem uma verdadeira safra. Prepare-se e passe o controle remoto.', brand: 'Fortunato Tapeçaria' , currentInventory: 7 },
  {
    categories: ['jeans', 'bermuda'], name: 'Marcas famosas ', price: '2900', image: '/products/bermudas_48.jpeg', description: 'Você não precisa sair para ser resistente. O sofá de couro cru Cigar apresenta uma estrutura robusta de madeira com cantos bloqueados e costuras brutas para aquele visual de Malboro. Este sofá de couro marrom é aconchegante em uma casa de campo, cabana ou condomínio. E o couro (o couro!) fica mais bonito com o uso: marcas sutis de caracteres como picadas de insetos, cicatrizes cicatrizadas e variação de grão refletem uma verdadeira safra. Prepare-se e passe o controle remoto.' , brand: 'Fortunato Tapeçaria', currentInventory: 13},
  {
    categories: ['camisa', 'manga comprida'], name: 'Camisa Manga comprida', price: '800', image: '/products/camisa_manga_comprida_branca.jpeg', description: 'Você não precisa sair para ser resistente. O sofá de couro cru Cigar apresenta uma estrutura robusta de madeira com cantos bloqueados e costuras brutas para aquele visual de Malboro. Este sofá de couro marrom é aconchegante em uma casa de campo, cabana ou condomínio. E o couro (o couro!) fica mais bonito com o uso: marcas sutis de caracteres como picadas de insetos, cicatrizes cicatrizadas e variação de grão refletem uma verdadeira safra. Prepare-se e passe o controle remoto.' , brand: 'Fortunato Tapeçaria', currentInventory: 9},
  {
    categories: ['camisa', 'manga comprida'], name: 'Camisa Manga comprida colorida', price: '2900', image: '/products/camisa_manga_comprida_colorida.jpg', description: 'Você não precisa sair para ser resistente. O sofá de couro cru Cigar apresenta uma estrutura robusta de madeira com cantos bloqueados e costuras brutas para aquele visual de Malboro. Este sofá de couro marrom é aconchegante em uma casa de campo, cabana ou condomínio. E o couro (o couro!) fica mais bonito com o uso: marcas sutis de caracteres como picadas de insetos, cicatrizes cicatrizadas e variação de grão refletem uma verdadeira safra. Prepare-se e passe o controle remoto.', brand: 'Fortunato Tapeçaria', currentInventory: 24 },

  {
    categories: ['calca', 'calca'], name: 'Calça Azul', price: '2900', image: '/products/calca_azul.jpeg', description: 'Você não precisa sair para ser resistente. O sofá de couro cru Cigar apresenta uma estrutura robusta de madeira com cantos bloqueados e costuras brutas para aquele visual de Malboro. Este sofá de couro marrom é aconchegante em uma casa de campo, cabana ou condomínio. E o couro (o couro!) fica mais bonito com o uso: marcas sutis de caracteres como picadas de insetos, cicatrizes cicatrizadas e variação de grão refletem uma verdadeira safra. Prepare-se e passe o controle remoto.', currentInventory: 14 },

  
  {
    categories: ['calca', 'calca'], name: 'Calça Bege', price: '2900', image: '/products/calca_bege.jpeg', description: 'Você não precisa sair para ser resistente. O sofá de couro cru Cigar apresenta uma estrutura robusta de madeira com cantos bloqueados e costuras brutas para aquele visual de Malboro. Este sofá de couro marrom é aconchegante em uma casa de campo, cabana ou condomínio. E o couro (o couro!) fica mais bonito com o uso: marcas sutis de caracteres como picadas de insetos, cicatrizes cicatrizadas e variação de grão refletem uma verdadeira safra. Prepare-se e passe o controle remoto.', currentInventory: 14 },

  
    
  
  
 
]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory