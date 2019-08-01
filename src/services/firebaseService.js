import { dbFirebase } from "../config/firebase"

export default {
    getAll(ref){
        return new Promise((resolve, reject) => {
            dbFirebase.ref(ref).on('value', (snapshot) => resolve(snapshot.val())) 
        })
    },
    create(ref, data){
        return dbFirebase.ref(ref).push(data)
    },
    delete(ref, id){
        return dbFirebase.ref(ref).child(id).remove()
    }
}