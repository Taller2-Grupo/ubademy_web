import React, { useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import HeaderTabla from "./HeaderTabla";
import { stableSort, getComparator } from "./TablaElements";
import dateFormat from "dateformat";
import ToolbarTabla from "./ToolbarTabla";
import { useHistory } from "react-router-dom";

const Tabla = ({ headCells, rows, titulo, baseRedirect, idParam }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState(headCells[0].id);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const history = useHistory();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = ({ target }) => {
    setRowsPerPage(parseInt(target.value, 10));
    setPage(0);
  };

  const handleChangeDense = ({ target }) => {
    setDense(target.checked);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <ToolbarTabla titulo={titulo} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <HeaderTabla
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={headCells}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      onClick={(event) =>
                        history.push(baseRedirect + row[idParam])
                      }
                      tabIndex={-1}
                      key={index}
                    >
                      {headCells.map((column) => {
                        return (
                          <TableCell align="left">
                            {column.type === "date"
                              ? row[column.id] == null
                                ? ""
                                : dateFormat(row[column.id], "yyyy-mm-dd hh:MM")
                              : column.type === "bool"
                              ? row[column.id] === true
                                ? column.trueValue
                                : column.falseValue
                              : row[column.id]}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Condensar tabla"
      />
    </Box>
  );
};

export default Tabla;
