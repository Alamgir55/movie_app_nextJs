import React from 'react';

class Modal extends React.Component {
    constructor(props){
        super(props);

        this.closeButton = null
    }
    closeModal(){
        this.closeButton.click();
    }
    submitModal = () => {
        alert('Submit Button');
        this.closeModal();
    }

    render(){
        return (
            <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Create Movie
                </button>
    
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create Movie</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                    <div className="modal-footer">
                        <button ref={ele => this.closeButton = ele } type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        { this.props.hasSubmit &&
                        <button onClick={this.submitModal} type="button" className="btn btn-primary">Save changes</button>
                        }
                    </div>
                    </div>
                </div>
                </div>
            </div>    
        )
    }

}

// const Modal = (props) => {

//     let closeButton = null;

//     const submitButton = () => {
//         alert('Submit Button');
//         closeButton.click();
//     }
//     return (
//         <div>
//         <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//             Create Movie
//             </button>

//             <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                 <div className="modal-header">
//                     <h5 className="modal-title" id="exampleModalLabel">Create Movie</h5>
//                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                     <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>
//                 <div className="modal-body">
//                     {props.children}
//                 </div>
//                 <div className="modal-footer">
//                     <button ref={ele => closeButton = ele } type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                     { props.hasSubmit &&
//                     <button onClick={submitButton} type="button" className="btn btn-primary">Save changes</button>
//                     }
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>    
//     )
// }
export default Modal; 