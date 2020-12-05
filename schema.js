import { buildSchema } from "graphql";

const schema = buildSchema(`
    
# Email & Friend is user defined datatype
    type Friend{
        id: ID
        firstName:String
        lastName:String
        email:[Email]!
    }
    
    type Email{
        email:String,
    }

    #This is must have attribute
    type Query{
        friend:Friend
    }
`);

export default schema;
