import { VFC } from 'react';
import { Title } from '@components/Part';
import cc from 'classcat';
import { Container, SimpleGrid } from '@mantine/core';

type Props = {
  title?: string,
  children: React.ReactNode,
  className?: string,
}

export const ExtensionLayout: VFC<Props> = (props) => {
  const { title, children } = props
  return (
    <>
      <div className='fixed top-0 left-0 py-8 px-7 w-full h-full bg-gray-800'>
        <Container>
          {title && <Title label={title} />}
          <SimpleGrid>
            {children}
          </SimpleGrid>
        </Container>
      </div>
    </>
  )
}