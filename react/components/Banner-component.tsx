import React from 'react'
import { useQuery } from 'react-apollo'

import banner from '../graphql/banner.gql'

type Props = {
  text: string
}

function BannerComponent({text}: Props) {
  const { data } = useQuery(banner)
  return (
    <div className="bg-emphasis white-90 flex gap-2 items-center justify-center pa4 bg-lightest-blue navy">
      <svg className="w1" data-icon="info" viewBox="0 0 32 32" fill="currentColor">
        <title>info icon</title>
        <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
      </svg>
      <p> {data?.banner}</p>
      <span className="lh-title ml3"> {text}</span>

    </div>
  )
}

BannerComponent.schema = {
  title: "Custom",
  description: "Custom Component Description",
  type: "object",
  properties: {
    title: {
      type: "string",
      title: "Change title Props",
      default: "null"
    }
  }
}

export default BannerComponent
