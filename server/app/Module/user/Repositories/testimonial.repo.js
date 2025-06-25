const testimonial = require("../Model/testimonial.model");


class testimonialrepo{
    async adddata(data){
        try {

            const contactdata = await testimonial.create(data)

            return contactdata;
        } catch (err) {
            console.log(err);
        }
    }
    async tesmonialshowdata(id){
        try {

            const contactdata = await testimonial.findById(id)

            return contactdata;
        } catch (err) {
            console.log(err);
        }
    }
    async testmonialfinf(id){
        try {
            
           
            const deletetest=await testimonial.findById(id)
            
            

            return deletetest;
        } catch (err) {
            console.log(err);
        }
    }
    async tesmonialupdatedata(id,data){
        try {
            
            const { commentdata, rating }=data
            const deletetest=await testimonial.findById(id)
            if(deletetest.isdelete){
                return 
            }
            const contactdata = await testimonial.findByIdAndUpdate(id,{
                commentdata, rating
            })

            return contactdata;
        } catch (err) {
            console.log(err);
        }
    }
    async tesmonialdeletedata(id){
        try {           
            const contactdata = await testimonial.findByIdAndUpdate(id,{
                isdelete:true
            })

            return contactdata;
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports=new testimonialrepo()