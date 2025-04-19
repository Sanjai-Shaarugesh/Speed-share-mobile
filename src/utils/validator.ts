import type { MetaData } from '../proto/message.ts';
import { humanFileSize } from './humanFileSize.ts';

export function validateFileMetadata(metadata: MetaData, maxSize?: number): Error | undefined {
  if (maxSize && metadata.size > maxSize) {
    return new Error(`file is exceed max size at ${humanFileSize(maxSize)}`);
  }
}