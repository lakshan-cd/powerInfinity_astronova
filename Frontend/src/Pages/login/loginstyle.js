
const heading ={
    fontSize: 50,
    Type: "center",
    marginTop:'50px',
    
    
   
    
}
const headingBox= {
    display: { 
        xs: "flex", 
        md: "flex" ,
        alignItems: "center",
        justifyContent: "center",
    }
}

const text ={
    display: { 
        xs: "flex", 
        md: "flex" ,
        alignItems: "flex-start",
        
    },
marginLeft:"0px",
marginTop:"20px"   
}
const main ={
    height:'100vh',
    color:"white",
    backgroundImage: 'url(images/back.png)',
    backgroundSize:'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
    
    
}

const grid1 = {
  
}
const grid2 = {
  display: "flex",
    flexDirection:"column",

}

const boxmain = {
  marginTop:'100px',
    display: "flex",
    flexDirection:"column",
      alignItems: "center",
      justifyContent:"center"
      
}

const formbox ={
   
  
    marginTop: '20px',
    

}
const textfield = {

    minWidth:{sm:"200px",md:"500px"},
    opacity:"0.7",
    // padding: theme.spacing(0, 0),
  marginRight: "10px",
  marginTop: "10px",
  borderRadius: 10,
  backgroundColor: "#F7F1F1",
  height: "50px",
  "&:hover": {
    height: "50px",
    "& fieldset": {
      borderColor: "transparent", // Change the border color on hover
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent", // Change the default border color
    },
    "&:hover fieldset": {
      borderColor: "transparent", // Change the border color on hover
    },
  },
    
    
    
}
const loginbutton ={
    
    marginTop: "60px",
    minWidth:"200px",
    backgroundColor:"#CC9200", 
    "&:hover": {
        backgroundColor: "#CC9200",
        color: "white",
        border: " 1px solid #CC9200"
      },
      border: " 1px solid #CC9200",
      
}

const buttondiv={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}



export {heading,main,text,grid2,grid1,boxmain,formbox,textfield,loginbutton,headingBox}