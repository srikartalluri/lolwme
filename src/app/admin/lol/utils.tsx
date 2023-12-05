import axios from 'axios';


let api = 'RGAPI-538b64e6-237f-41ad-a2e7-6b92dbb6545d'

export async function getPuuid(name: string) {
    let api_url = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'
    let sum_url = api_url + name + '?api_key=' + api
    let retval = "Nonee"


    try{
        let response = await axios.get(sum_url)
        console.log(response)

        if (response.status == 200){
            return response.data['puuid']
        }
    }
    catch{
        return "NA"
    }

    
    
}
