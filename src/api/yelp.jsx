import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 
        "Bearer hB2T3wM-UvewD6MyJpirvJ9EHF-xGQbOGsB4Vr955sF-xPGVtbUdh2Upe6yAY6XZou6CsTB3opyKs8WRFKpoRYH4aA85YiGoIVAQx9L2XIoVoDMUrGQ1cVot982HYnYx",
        
    }
})