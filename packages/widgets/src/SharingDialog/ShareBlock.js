import React, { useState } from 'react'
import { Button, InputField } from '../';
import { AccessSelect } from './AccessSelect';
import { shareBlockStyles } from "./SharingDialog.styles";

export const ShareBlock = ({ onAdd }) => {
    const [userOrGroup, setUserOrGroup] = useState(undefined)
    const [access, setAccess] = useState(undefined)

    const onSubmit = e => {
        e.preventDefault()
        onAdd({ type: 'user', id: userOrGroup, access })
        setUserOrGroup(undefined)
        setAccess(undefined)
    }

    return <div className="share-block">
      <style jsx>{shareBlockStyles}</style>
      <p>Share with users and groups</p>
      <form onSubmit={onSubmit} className="sharing-inputs">
        <InputField
          placeholder="Search for user, group or role"
          inputWidth="400px"
          value={userOrGroup}
          onChange={({ value }) => setUserOrGroup(value)}
        />
        <div className="select-wrap">
          <AccessSelect access={access} onChange={setAccess} />
        </div>
        <Button type="submit" large disabled={!userOrGroup || !access}>Share</Button>
      </form>
    </div>
};