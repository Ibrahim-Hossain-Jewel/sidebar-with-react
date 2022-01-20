import React from "react";
import './service-collection.scss';
import PrintCollection from "../view-colletion/view-collection.component";

class collectionItem extends React.Component{
    constructor(){
        super();
        this.state = {
            consultationData: [
                {
                    title: "Business  Transformation",
                    paragraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
                    imageSource: "/images/BusinessTransformation-Hero-Image-2-1920x560px@2x.jpg",
                    id: 1
                },
                {
                    title: "Innovation & ideation workshops",
                    paragraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                    imageSource: "/images/InnovationAndIdeation-Hero-Image-1920x560px@2x.jpg",
                    id: 2
                },{
                    
                    title: "Technology Consulting",
                    paragraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                    imageSource: "/images/TechnologyConsulting-Hero-Image-1920x560px@2x.jpg",
                    id: 3
                }
            ]
        }
    }  
    //now pass all the data to the service preview
    render(){
        return(
            <div className="servicePoint">
                {
                    this.state.consultationData.map((collectionInfo)=>
                    <PrintCollection key={collectionInfo.id} data = { collectionInfo } />
                    )
                }
            </div>
        );
    }
}
export default collectionItem;