export const messageAction=()=>{
    let strings = [
        "React is so easy",
        "Redux is tricky but easy",
        "Angular has many building blocks",
        "Javascript has lot of concepts",
        "ES2015 intorduced classes"
    ]

 return  {  
    type: "MESSAGE_ACTION",    
    data: strings[Math.round(Math.random()*4)]
  }

}