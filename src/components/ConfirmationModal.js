import React from "react";

const ConfirmationModal = props => {
	return (
		<div
			className="modal fade"
			id="confirmationModal"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="confirmationModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="confirmationModalLabel">
							Do you really want to delete this item?
						</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						Item with ID: {props.getItemId} will be removed from
						your favorites list!
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-danger"
							data-dismiss="modal"
							onClick={() => props.deleteItem(props.getItemId)}
						>
							Yes
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
						>
							No
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationModal;
