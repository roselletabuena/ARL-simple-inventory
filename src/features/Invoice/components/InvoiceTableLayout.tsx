import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface InvoiceTableLayoutProps {
  children: React.ReactNode;
}

const InvoiceTableLayout: React.FC<InvoiceTableLayoutProps> = ({
  children,
}) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center' width={1} />
            <TableCell align='center' width={100}>
              QTY
            </TableCell>
            <TableCell align='center' width={150}>
              UNIT
            </TableCell>
            <TableCell align='center'>ARTICLES</TableCell>
            <TableCell align='center' width={120}>
              Unit Price
            </TableCell>
            <TableCell align='center' width={120}>
              AMOUNT
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoiceTableLayout;
