import * as React from 'react';
import styled from 'styled-components'

export const PaddingGlobal = styled.div`
  padding: 5rem 2.5rem;
  height: 100%;
  display: grid;
  @media (max-width: 1025px) {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  @media (max-width: 912px) {
    padding-right: 1.25rem;
    padding-left: 1.25rem;
`

export const ContainerLarge = styled.div`
  width: 100%;
  height: 100%;
  max-width: var(--containerLargeWidth);
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 2560px) {
    max-width: 89rem !important;
  }
`

export const ContainerLargeWalletSlider = styled.div`
  width: 100%;
  max-width: 76rem;
  margin: 60px auto auto auto;
  @media (max-width: 2560px) {
    max-width: 113rem !important;
  }
  @media (max-width: 768px) {
    margin: 0 auto auto auto !important;
  }
`

export const ContainerLargeFooter = styled.div`
  width: 100%;
  max-width: var(--containerLargeWidth);
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 2560px) {
    max-width: 89rem !important;
  }
`

export const MainContainer = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: grid !important;
  }
`
