import {ActionCreators} from '../redux/notesReducer';
import * as axios from 'axios';

const axiosInstance = axios.create({

    baseURL:'https://localhost:44395/notes'
})

export const GetNotes = async(dispatch) =>{

    try{

    const {data} = await axiosInstance.get();

    //     const response=[
            
    //         {value:"Study for exam..", id:1},
    //         {value:"Soon I am master, too", id:2},
    //         {value:"Build an app today, or so.", id:3},
    // ]


dispatch (ActionCreators.setNotes(data));

        }
    catch{
        console.log("error!")
    }

    }

        export const DeleteNote = async(dispatch,note) =>{

            try{
                 await axiosInstance.delete(`/${note.id}`);
            
            dispatch (ActionCreators.deleteNote(note));
            
                    }
                catch{
                    console.log("error!")
                }


        }



            export const NewNote = async(dispatch,note) =>{

                try{
                    const response = {value:note, id:note.id};            
                    dispatch (ActionCreators.newNote(response));
                        
                    }
                            catch{
                                console.log("error!");
                            }
            

            }



            export const EditNote = async(dispatch,note) =>{

                try{
                    const response = {value:note, id:1};
                       
                       
            
            
                    dispatch (ActionCreators.editNote(response));
                        
                    }
                            catch{
                                console.log("error!");
                            }
            

            }
