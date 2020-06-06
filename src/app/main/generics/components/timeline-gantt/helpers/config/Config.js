const defvalues={
    header:{
        top:{
            style:{
                backgroundColor:"#fff",
                fontSize:10,
                color:'black',
                textAlign:'right',
                fontWeight: 'bold'
            }
        },
        middle:{
            style:{
                backgroundColor:"#fff",
                color:"black"
            },
            selectedStyle:{
                backgroundColor:"#fff",
                color:"black",
                fontWeight: 'bold' 
            }
        },
        bottom:{
            style:{
              background:"#fff",
              color:'black',
              fontSize:9
            },
            selectedStyle:{
                backgroundColor:"##fff",
                fontWeight: 'bold'
            }
          }
    },
    taskList:{
        title:{
            label:"Tasks",
            style:{
                backgroundColor: '#fff',
                borderBottom: 'solid 1px silver',
                color: 'black',
                textAlign: 'center'
            }
        },
        task:{
            style:{
                backgroundColor: '#fbf9f9',
            }
        },
        verticalSeparator:{
            style:{
                backgroundColor: '#fff',
            },
            grip:{
                style:{
                  backgroundColor: '#cfcfcd',
                }
              }
        }
    },
    dataViewPort:{
        rows:{
          style:{
            backgroundColor:"#fbf9f9",
            borderBottom:'solid 0.5px #cfcfcd'
          }
        },
        task:{
            showLabel:true,
            
            style:{
                position: 'absolute',
                borderRadius:14,
                color: 'white',
                textAlign:'center',
                backgroundColor:'grey'
            },
            selectedStyle:{
                position: 'absolute',
                borderRadius:14,
                border:'solid 1px #ff00fa',
                color: 'white',
                textAlign:'center',
                backgroundColor:'grey'
            }
        }
      },
    links:{
        color:'black',
        selectedColor:'#ff00fa',

    }
  }


  

class Config {
    constructor(){
        this.data=defvalues;
    }

    load=(values)=>{
        this.data={}
        if (values)
            this.populate(values,defvalues,this.data);
        else
        this.data=defvalues;
    }


    populate(values,defvalues,final){
        if (!this.isObject(defvalues))
            return;
        for(let key in defvalues){
            if (!values[key]){
                //if not exits
                final[key]=defvalues[key]
            }
            else{
                //if it does
                final[key]=values[key]
                this.populate(values[key],defvalues[key],final[key]);
            }
        }
    }
    isObject(value){
        if (typeof value === 'string'
        || typeof value === 'boolean'
        || typeof value === 'number')
            return false;
        return true;
    }
    
    get values(){
        return this.data;
    }

}




const config=new Config();
export default config;