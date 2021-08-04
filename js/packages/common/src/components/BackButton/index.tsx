import React from 'react';
import { Button } from 'antd';
import { LABELS } from '../../constants';
import { useRouter } from 'next/router';

export const BackButton = () => {
  const router = useRouter();
  return (
    <Button type="text" onClick={() => router.back()}>
      {LABELS.GO_BACK_ACTION}
    </Button>
  );
};
