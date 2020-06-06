const useForm = (callback) => {const [values, setValues] = useState({ });   
const [loading, setLoading] = useState(false);    
auxValues[event.target.name] = event.target.value;     

setValues(auxValues);   };    
const handleChange = (event) => {const auxValues = { ...values };     

const handleSubmit = callback => event => 
{    
    event.preventDefault();     
    setLoading(true);     
    callback();     
    setLoading(false);   }; 
};

// outro file
const [{ values, loading }, handleChange, handleSubmit] = useForm();

// nos button or input
onChange={handleChange}