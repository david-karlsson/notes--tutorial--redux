import {ActionCreators} from '../redux/notesReducer';

export const GetNotes = async(dispatch) =>{

    try{
        const response=[
            
            {value:"Study for exam..", id:1},
            {value:"Soon I am master, too", id:2},
            {value:"Build an app today, or so.", id:3},
    ]


dispatch (ActionCreators.setNotes(response));

        }
    catch{
        console.log("error!")
    }

}

    export const DeleteNote = async(dispatch,note) =>{

        try{
        
    
    dispatch (ActionCreators.deleteNote(note));
    
            }
        catch{
            console.log("error!")
        }

}