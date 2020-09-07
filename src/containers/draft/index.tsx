import React, { useState } from 'react';
import { SectionTitle, Card, CardBody, Dropdown, DropdownItem } from 'components';

import { useLocale } from 'locales';
import DraftCard from './draftCard';

const Draft: React.FC<unknown> = () => {
  const [isSortContentTypeOpen, setIsSortContentTypeOpen] = useState(false);
  const texts = useLocale();
  return (
    <div className="grid grid-cols-1 mb-8">
      <SectionTitle>{texts.DRAFT}</SectionTitle>

      <div className="grid grid-cols-1 mb-8">
        <Card>
          <CardBody>
            <div className="grid text-right flex-wrap flex-shrink">
              <div>
                <span className="-mt-1">Sort by (Date Added):</span>
                <button
                  type="button"
                  className="ml-2 text-lg mt-1 rounded-full focus:shadow-outline-purple focus:outline-none"
                  onClick={() => {
                    setIsSortContentTypeOpen(true);
                  }}
                  aria-label="Account"
                  aria-haspopup="true"
                >
                  <i className="i-arrow-down" />
                </button>
                <Dropdown
                  align="right"
                  isOpen={isSortContentTypeOpen}
                  onClose={async () => setIsSortContentTypeOpen(false)}
                >
                  <DropdownItem title="Sort by Author">Author</DropdownItem>
                  <DropdownItem title="Sort by Date Added">Date Added</DropdownItem>
                  <DropdownItem title="Sort by Subject">Subject</DropdownItem>
                </Dropdown>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <DraftCard
        cardTitle="Union and Intersection of Two Sets"
        cardSkill="Sets"
        cardAuthor="Sajid Ali Anjum"
        cardDate="2 days"
        cardGrade="8th Grade"
        cardSubject="Mathematics"
        cardIcon="i-person"
      />

      <DraftCard
        cardTitle="Union and Intersection of Two Sets"
        cardAuthor="Sajid Ali Anjum"
        cardSkill="Sets"
        cardDate="2 days"
        cardGrade="8th Grade"
        cardSubject="Mathematics"
        cardIcon="i-person"
      />
    </div>
  );
};

export default Draft;
