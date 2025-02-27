```bash
# ubuntu 22.04
lsb_release -a

ssh-keygen -t rsa -b 4096 -C "sumit.skribe@gmail.com"

ARGOCD_VERSION=$(curl --silent "https://api.github.com/repos/argoproj/argo-cd/releases/latest" | grep '"tag_name"' | sed -E 's/.*"([^"]+)".*/\1/')

curl -sSL -o argocd "https://github.com/argoproj/argo-cd/releases/download/${ARGOCD_VERSION}/argocd-linux-amd64"

chmod +x argocd

sudo mv argocd /usr/local/bin/

# vim ~/.zshrc
export PATH="/usr/local/bin:$PATH"
source ~/.zshrc
argocd version

argocd login deployment.webdrift.ai --username admin --password rEsNYsFwPk43A5z- --grpc-web
argocd repo add git@github.com:sumit-skribe/website-generation-backend.git --ssh-private-key-path ~/.ssh/id_rsa
argocd repo list

cat ~/.ssh/id_rsa | base64
```

```bash
kubectl port-forward svc/argocd-server -n argocd 8080:443
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
```

admin
rEsNYsFwPk43A5z-

```bash
# private repo with ArgoCD using https and ArgoCD CLI
argocd version
argocd login argocd.leadsoft.ai --username admin --password rEsNYsFwPk43A5z- --grpc-web
argocd repo add https://github.com/sumit-skribe/argocd-configmap.git \
    --username sumit.skribe@gmail.com \
    --password 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
argocd repo list


echo -n "<YOUR_GITHUB_USERNAME>" | base64
echo -n "<YOUR_PERSONAL_ACCESS_TOKEN>" | base64
```

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-https-credentials
  namespace: argocd
  labels:
    argocd.argoproj.io/secret-type: repo-creds
type: Opaque
data:
  username: <BASE64_ENCODED_USERNAME>
  password: <BASE64_ENCODED_PAT>
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: argocd-cm
  namespace: argocd
data:
  repositories: |
    - url: https://github.com/<YOUR_ORG>/<YOUR_PRIVATE_REPO>.git
      usernameSecret:
        name: my-https-credentials
        key: username
      passwordSecret:
        name: my-https-credentials
        key: password
```

Important:
Setting up webhook for ArgoCD to trigger sync on push to the repository

1. Edit the Argo CD ConfigMap to enable webhook support.

```bash
kubectl edit cm argocd-cm -n argocd
```

```yaml
data:
  repository.credentials: |
    - url: https://github.com
      webhookSecret: bJGTJUg0L5PhDaNPEyIOSqUNwV3daY2FIkKj
```

2. Reload the configuration:

```bash
kubectl rollout restart deployment argocd-server -n argocd
```

3.  Configure Webhook in GitHub

Go to Your Repository: Navigate to your GitHub repository.
Settings → Webhooks: Click on "Settings" and then "Webhooks" in the left sidebar.
Add a Webhook:
Payload URL: https://argocd.your-domain.com/api/webhook
Content Type: application/json
Secret: Use the same secret you added in the Argo CD ConfigMap.
Events: Select "Just the push event" or any other relevant events (e.g., "Pull Request" for PR-driven workflows).
Active: Ensure the webhook is active.
Click "Add Webhook" to save the settings.
