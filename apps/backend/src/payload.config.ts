import { collections } from '@/collections';
import { Users } from '@/collections/Users';
import { globals } from '@/globals';
import { plugins } from '@/lib/plugins';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { defaultEditorLexicalConfig, lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { serverEnv } from './config/env';
import { endpoints } from './endpoints';
import { DEFAULT_EDITOR_FEATURES } from './lib/constants/editor';
import { getServerSideURL } from './lib/utils/getURL';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const typesPath = '../../../packages/types/src/payload-types.ts';

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
  },
  collections: collections,
  globals: globals,
  endpoints: endpoints,
  editor: lexicalEditor({
    features: DEFAULT_EDITOR_FEATURES,
    lexical: defaultEditorLexicalConfig,
  }),
  secret: serverEnv.PAYLOAD_SECRET,
  typescript: { declare: false, outputFile: path.resolve(dirname, typesPath) },
  db: postgresAdapter({
    pool: {
      connectionString: serverEnv.DATABASE_URL,
    },
  }),
  sharp,
  plugins: plugins,
  serverURL: getServerSideURL(),
});
