import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Main, PageTitle, Paper, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'components';
import { useLocale } from 'locales';
import { useStoreSelector } from 'services';
import { IUserState, Login } from 'containers/singIn';

const PageUI = (): React.ReactElement => {
  const texts = useLocale();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const user = useStoreSelector((state): IUserState => state.user);
  return (
    <Main>
      <PageTitle>{texts.SETTINGS}</PageTitle>
      <Paper className="my-2">
        <Button
          title="Login"
          callback={(e) => {
            dispatch(Login('wikz@live.com', '/D0h4svTV21RbNdcGGbq5Q'));
          }}
        >
          Login
        </Button>
        <Button
          title="Modal"
          className="ml-3"
          callback={() => {
            setVisible(!visible);
          }}
        >
          Modal
        </Button>
      </Paper>
      <Paper className="my-2">{JSON.stringify(user)}</Paper>
      <Modal
        isOpen={visible}
        callback={() => {
          setVisible(false);
        }}
      >
        <ModalHeader>Modal header</ModalHeader>
        <ModalBody>
          {' '}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae voluptatem tempore!
        </ModalBody>
        <ModalFooter>
          {/* I don't like this approach. Consider passing a prop to ModalFooter
           * that if present, would duplicate the buttons in a way similar to this.
           * Or, maybe find some way to pass something like size="large md:regular"
           * to Button
           */}
          <div className="hidden sm:block">
            <Button
              title="Cancel"
              layout="outline"
              callback={() => {
                setVisible(false);
              }}
            >
              Cancel
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button title="Accept" callback={() => {}}>Accept</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button
              title="Cancel"
              block
              size="large"
              layout="outline"
              callback={() => {
                setVisible(false);
              }}
            >
              Cancel
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button
              title="Accept"
              block
              size="large"
              callback={() => {
                setVisible(false);
              }}
            >
              Accept
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </Main>
  );
};

export default PageUI;
