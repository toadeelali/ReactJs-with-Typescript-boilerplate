/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

import Avatar from 'components/avatar';
import { Header, SideNav, Main, Page, PageTitle, PageWrapper } from 'components';
import { TableRow, Table, TableBody, TableCell, TableContainer, TableFooter, TableHeader } from 'components/table';

import { useLocale } from 'locales';

import Badge from 'components/badge';
import { TBadge } from 'components/badge/types';
import Pagination from 'components/Pagination';
import { response, ITableData } from './data.model';

const Skills: React.FC<unknown> = () => {
  const texts = useLocale();
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<ITableData[]>([]);

  const resultsPerPage = 10;
  const totalResults = response.length;

  const onPageChange = (p: number) => {
    setPage(p);
  };

  useEffect(() => {
    const nData = response.slice((page - 1) * resultsPerPage, page * resultsPerPage);
    setData([...nData]);
  }, [page]);

  return (
    <Page>
      <SideNav />
      <PageWrapper>
        <Header />
        <Main>
          <PageTitle>{texts.SKILLS}</PageTitle>

          <TableContainer>
            <Table>
              <TableHeader>
                <tr>
                  <TableCell className="text-xs">Client</TableCell>
                  <TableCell className="text-xs">Amount</TableCell>
                  <TableCell className="text-xs">Status</TableCell>
                  <TableCell className="text-xs">Date</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.map((user, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User image" />
                        <div>
                          <p className="font-semibold">{user.name}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{user.job}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">$ {user.amount}</span>
                    </TableCell>
                    <TableCell>
                      <Badge type={user.status as TBadge}>{user.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TableFooter>
              <Pagination
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                label="Table navigation"
                onChange={onPageChange}
              />
            </TableFooter>
          </TableContainer>
        </Main>
      </PageWrapper>
    </Page>
  );
};

export default Skills;
