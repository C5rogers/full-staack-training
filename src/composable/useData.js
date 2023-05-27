import { ref } from "vue";
import axios from "axios";


export function useData() {
    //variable definetion
    const countryList = ref([])


    const getAllCountryList = async() => {
        const limit = 5

        const query = `query country($limit: Int!){
            country(limit:$limit){
                name
                flag
                continent
                code
                capital
                currency
                language
            }
        }`
        try {
            const result = await fetch('https://countries.trevorblades.com/', {
                method: 'POST',
                headers: {
                    contentType: 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    query,
                    variable: {
                        limit
                    }
                })
            })
            countryList.value = await result.data
            console.log("the action is done!")
        } catch (error) {
            console.log(error)
        }
    }

    //logic or funciton definetion

    return {
        countryList,
        getAllCountryList
    }
    //return definition
}