import React from 'react';
import StoreContext from '../../StoreContext';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog-reducer';
import Dialog from './Dialog';

const DialogContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogPage;

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                };

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                };

                return (
                    <Dialog
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogPage={state}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default DialogContainer;
