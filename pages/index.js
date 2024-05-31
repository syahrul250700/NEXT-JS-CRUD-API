import * as React from 'react';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Chance } from 'chance';
import { ScatterChart } from '@mui/x-charts/ScatterChart';

import {
  blueberryTwilightPalette,
  mangoFusionPalette,
  cheerfulFiestaPalette,
} from '@mui/x-charts/colorPalettes';

import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';

import Grid from '@mui/material/Grid';
import Layout from '@/components/layout';

const years = [
  new Date(1990, 0, 1),
  new Date(1991, 0, 1),
  new Date(1992, 0, 1),
  new Date(1993, 0, 1),
  new Date(1994, 0, 1),
  new Date(1995, 0, 1),
  new Date(1996, 0, 1),
  new Date(1997, 0, 1),
  new Date(1998, 0, 1),
  new Date(1999, 0, 1),
  new Date(2000, 0, 1),
  new Date(2001, 0, 1),
  new Date(2002, 0, 1),
  new Date(2003, 0, 1),
  new Date(2004, 0, 1),
  new Date(2005, 0, 1),
  new Date(2006, 0, 1),
  new Date(2007, 0, 1),
  new Date(2008, 0, 1),
  new Date(2009, 0, 1),
  new Date(2010, 0, 1),
  new Date(2011, 0, 1),
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2018, 0, 1),
];

const FranceGDPperCapita = [
  28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645, 30341.807,
  31323.078, 32284.611, 33409.68, 33920.098, 34152.773, 34292.03, 35093.824,
  35495.465, 36166.16, 36845.684, 36761.793, 35534.926, 36086.727, 36691, 36571,
  36632, 36527, 36827, 37124, 37895, 38515.918,
];

const UKGDPperCapita = [
  26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248, 29259.764,
  30077.385, 30932.537, 31946.037, 32660.441, 33271.3, 34232.426, 34865.78,
  35623.625, 36214.07, 36816.676, 36264.79, 34402.36, 34754.473, 34971, 35185, 35618,
  36436, 36941, 37334, 37782.83, 38058.086,
];

const GermanyGDPperCapita = [
  25391, 26769.96, 27385.055, 27250.701, 28140.057, 28868.945, 29349.982, 30186.945,
  31129.584, 32087.604, 33367.285, 34260.29, 34590.93, 34716.44, 35528.715,
  36205.574, 38014.137, 39752.207, 40715.434, 38962.938, 41109.582, 43189, 43320,
  43413, 43922, 44293, 44689, 45619.785, 46177.617,
];



const data = [
  { id: 0, value: 10, label: 'series A' },
  { id: 1, value: 15, label: 'series B' },
  { id: 2, value: 20, label: 'series C' },
];

const chance = new Chance(42);

function getGaussianSeriesData(mean, stdev = [0.3, 0.4], N = 50) {
  return [...Array(N)].map((_, i) => {
    const x =
      Math.sqrt(-2.0 * Math.log(1 - chance.floating({ min: 0, max: 0.99 }))) *
        Math.cos(2.0 * Math.PI * chance.floating({ min: 0, max: 0.99 })) *
        stdev[0] +
      mean[0];
    const y =
      Math.sqrt(-2.0 * Math.log(1 - chance.floating({ min: 0, max: 0.99 }))) *
        Math.cos(2.0 * Math.PI * chance.floating({ min: 0, max: 0.99 })) *
        stdev[1] +
      mean[1];
    return { x, y, id: i };
  });
}

const legendPlacement = {
  slotProps: {
    legend: {
      position: {
        vertical: 'middle',
        horizontal: 'right',
      },
      direction: 'column',
      itemGap: 2,
    },
  },
  margin: {
    top: 20,
    right: 100,
  },
};

const series = [
  { label: 'Series 1', data: getGaussianSeriesData([-5, 0]) },
  { label: 'Series 2', data: getGaussianSeriesData([-4, 0]) },
  { label: 'Series 3', data: getGaussianSeriesData([-3, 0]) },
  { label: 'Series 4', data: getGaussianSeriesData([-2, 0]) },
  { label: 'Series 5', data: getGaussianSeriesData([-1, 0]) },
  { label: 'Series 6', data: getGaussianSeriesData([0, 0]) },
  { label: 'Series 7', data: getGaussianSeriesData([1, 0]) },
  { label: 'Series 8', data: getGaussianSeriesData([2, 0]) },
  { label: 'Series 9', data: getGaussianSeriesData([3, 0]) },
  { label: 'Series 10', data: getGaussianSeriesData([4, 0]) },
  { label: 'Series 11', data: getGaussianSeriesData([5, 0]) },
  { label: 'Series 12', data: getGaussianSeriesData([6, 0]) },
  { label: 'Series 13', data: getGaussianSeriesData([7, 0]) },
].map((s) => ({
  ...s,
  valueFormatter: (v) => `(${v.x.toFixed(1)}, ${v.y.toFixed(1)})`,
}));

const categories = {
  blueberryTwilight: blueberryTwilightPalette,
  mangoFusion: mangoFusionPalette,
  cheerfulFiesta: cheerfulFiestaPalette,
};

export default function Home() {
  const theme = useTheme();
  const [colorScheme, setColorScheme] = React.useState('blueberryTwilight');
  const [colorMode, setColorMode] = React.useState(theme.palette.mode);

  const newTheme = createTheme({ palette: { mode: colorMode } });
  return (
    <Layout>
    <title>NASH | Dashboard</title>
    <div className='-mt-16 mb-16'>
    <ThemeProvider theme={newTheme}>
     
      <Paper sx={{ width: '100%', p: 8 }} elevation={0}>
        <Stack direction="column" spacing={2}>
          <ScatterChart
            height={400}
            series={series}
            yAxis={[{ min: -1.5, max: 1.5 }]}
            colors={categories[colorScheme]}
            {...legendPlacement}
          />
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <div>
              <Button
                sx={{ ml: 1 }}
                onClick={() =>
                  setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'))
                }
                color="inherit"
                endIcon={
                  colorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />
                }
              >
                {colorMode} mode
              </Button>
            </div>
            <TextField
              select
              sx={{ maxWidth: 1 }}
              value={colorScheme}
              onChange={(event) => setColorScheme(event.target.value)}
            >
              {Object.entries(categories).map(([name, colors]) => (
                <MenuItem key={name} value={name}>
                  <Stack direction="row" alignItems="center">
                    <Typography sx={{ mr: 2 }}>{name}</Typography>
                    <div style={{ width: 200, height: 20 }}>
                      {colors(colorMode).map((c) => (
                        <div
                          key={c}
                          style={{
                            width: 20,
                            height: 20,
                            backgroundColor: c,
                            display: 'inline-block',
                          }}
                        />
                      ))}
                    </div>
                  </Stack>
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Stack>
      </Paper>
      
    </ThemeProvider>
    </div>
<Grid container spacing={2}>
  <Grid item xs={6} md={6}>
    <PieChart
    series={[
      {
        data,
        highlightScope: { faded: 'global', highlighted: 'item' },
        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
      },
    ]}
    height={200}
  />
  </Grid>
  <Grid item xs={6} md={6}>
  <LineChart
      xAxis={[
        {
          id: 'Years',
          data: years,
          scaleType: 'time',
          valueFormatter: (date) => date.getFullYear().toString(),
        },
      ]}
      series={[
        {
          id: 'France',
          label: 'French GDP per capita',
          data: FranceGDPperCapita,
          stack: 'total',
          area: true,
          showMark: false,
        },
        {
          id: 'Germany',
          label: 'German GDP per capita',
          data: GermanyGDPperCapita,
          stack: 'total',
          area: true,
          showMark: false,
        },
        {
          id: 'United Kingdom',
          label: 'UK GDP per capita',
          data: UKGDPperCapita,
          stack: 'total',
          area: true,
          showMark: false,
        },
      ]}
      width={600}
      height={400}
      margin={{ left: 70 }}
    />
  </Grid>
</Grid>




</Layout>
  );
}
