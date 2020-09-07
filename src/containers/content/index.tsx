import React from 'react';

import { Header, SideNav, Main, Page, PageWrapper } from 'components/layout';
import { PageTitle, SectionTitle } from 'components';
import { useLocale } from 'locales';
import Button from 'components/core/button';

const Content: React.FC<unknown> = () => {
  const texts = useLocale();
  return (
    <Page>
      <SideNav />
      <PageWrapper>
        <Header />
        <Main>
          <PageTitle>{texts.CONTENT}</PageTitle>

          <SectionTitle>Primary</SectionTitle>
          <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                size="larger"
              >
                Larger Button
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                size="large"
              >
                Large Button
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
              >
                Regular
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
              >
                Router Link
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                disabled
              >
                Disabled
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                size="small"
              >
                Small
              </Button>
            </div>
          </div>

          <SectionTitle>Outline</SectionTitle>
          <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                layout="outline"
                size="larger"
              >
                Larger Button
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                layout="outline"
                size="large"
              >
                Large Button
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                layout="outline"
              >
                Regular
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                layout="outline"
              >
                Router Link
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                layout="outline"
                disabled
              >
                Disabled
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                layout="outline"
                size="small"
              >
                Small
              </Button>
            </div>
          </div>

          <SectionTitle>Link</SectionTitle>
          <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                layout="link"
                size="larger"
              >
                Larger Button
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                layout="link"
                size="large"
              >
                Large Button
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                layout="link"
              >
                Regular
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                layout="link"
              >
                Router Link
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                layout="link"
                disabled
              >
                Disabled
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                layout="link"
                size="small"
              >
                Small
              </Button>
            </div>
          </div>

          <SectionTitle>Icons</SectionTitle>
          <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                iconRight="i-person"
              >
                <span>Icon right</span>
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                iconLeft="i-person"
              >
                <span>Icon Left</span>
              </Button>
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                icon="i-person"
                aria-label="Like"
              />
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                icon="i-person"
                aria-label="Edit"
              />
            </div>

            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                icon="i-person"
                layout="link"
                aria-label="Like"
              />
            </div>
            <div>
              <Button
                title="test"
                callback={(e) => {
                  console.log(e);
                }}
                icon="i-person"
                layout="outline"
                aria-label="Like"
              />
            </div>
          </div>
        </Main>
      </PageWrapper>
    </Page>
  );
};

export default Content;
